from flask import Flask, request, send_file, render_template_string
from werkzeug.utils import secure_filename
from detectron2.config import get_cfg
from detectron2 import model_zoo
from detectron2.engine import DefaultPredictor
import os
import cv2
import numpy as np
from scipy.spatial import distance_matrix
from detectron2.utils.visualizer import ColorMode, Visualizer
import matplotlib.pyplot as plt


NUM_CLASSES = 14
cfg = get_cfg()
cfg.merge_from_file(model_zoo.get_config_file("COCO-InstanceSegmentation/mask_rcnn_R_101_FPN_3x.yaml"))
cfg.MODEL.WEIGHTS = "./uploads/model_final.pth"
cfg.MODEL.DEVICE = 'cpu'  # Here is where you specify the device
cfg.MODEL.ROI_HEADS.NUM_CLASSES = NUM_CLASSES  # should be the same number as in the trained model


predictor = DefaultPredictor(cfg)

import sys
print(sys.version)
app = Flask(__name__)

# Define the path to save the uploaded file
UPLOAD_FOLDER = './uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# def generate_path(holds, start_idx, end_idx, max_move_dist, dist_matrix):
#     path = [start_idx]
#     current_hold_idx = start_idx

#     while current_hold_idx != end_idx:
#         print('hi')
#         possible_moves = np.where(dist_matrix[current_hold_idx, :] < max_move_dist)[0]
#         possible_moves = [idx for idx in possible_moves if idx not in path]

#         if not possible_moves:
#             print(current_hold_idx)
#             raise ValueError("No possible moves. Increase max_move_dist or change holds.")
        
#         # Get the Euclidean distances to the end hold for all possible moves
#         distances_to_end = np.sqrt(np.sum((holds[possible_moves] - holds[end_idx])**2, axis=1))

#         # Choose the hold with the smallest distance to the end hold
#         next_hold_idx = possible_moves[np.argmin(distances_to_end)]
        
#         path.append(next_hold_idx)
#         current_hold_idx = next_hold_idx

#     return path

def generate_path(holds, start_idx, end_idx, max_move_dist, dist_matrix):
    path = [start_idx]
    current_hold_idx = start_idx
    num_holds = 7

    while len(path) != num_holds:
        possible_moves = np.where(dist_matrix[current_hold_idx, :] < max_move_dist)[0]
        possible_moves = [idx for idx in possible_moves if idx not in path]

        if not possible_moves:
            raise ValueError("No possible moves. Increase max_move_dist or change holds.")

        # Get the Euclidean distances to the end hold for all possible moves
        distances_to_end = np.sqrt(np.sum((holds[possible_moves] - holds[end_idx])**2, axis=1))

        # Select a random hold from the possible moves based on their distances to the end hold
        # Adjust the randomness by modifying the weights based on the distances
        weights = distances_to_end.max() - distances_to_end
        probabilities = weights / np.sum(weights)
        next_hold_idx = np.random.choice(possible_moves, p=probabilities)

        path.append(next_hold_idx)
        current_hold_idx = next_hold_idx

    return path

def process_uploaded_image(file_path, filename):
    img = cv2.imread(file_path)
    print(img.shape)
    outputs = predictor(img)
    print(outputs)
    print(outputs)
    instances = outputs['instances']
    


    pred_boxes = instances.pred_boxes
    # Convert the Boxes object to tensor
    pred_boxes_tensor = pred_boxes.tensor

    # Transfer the tensor to CPU and convert it to numpy
    pred_boxes_numpy = pred_boxes_tensor.cpu().numpy()
    # Suppose pred_boxes_numpy is your numpy array containing bounding boxes in the form [x1, y1, x2, y2]

    # Compute the center of the bounding boxes
    xc = (pred_boxes_numpy[:, 0] + pred_boxes_numpy[:, 2]) / 2
    yc = (pred_boxes_numpy[:, 1] + pred_boxes_numpy[:, 3]) / 2

    # Combine xc and yc to form the center coordinates
    center_coordinates = np.stack([xc, yc], axis=-1)
    
    start_hold_idx = np.argmax(center_coordinates[:, 1])
    maxvalue = center_coordinates[start_hold_idx][1]

    end_hold_idx = np.argmin(center_coordinates[:, 1])
    minvalue = center_coordinates[end_hold_idx][1]

    diff = maxvalue - minvalue

    # Determine 20% range for start and end holds
    start_upper = maxvalue - 0.1 * diff
    start_lower = maxvalue - 0.2 * diff

    end_upper = minvalue + 0.2 * diff
    end_lower = minvalue + 0.1 * diff

    # Get the indices within the 20% range for start and end
    start_indices = np.where((center_coordinates[:, 1] <= start_upper) & (center_coordinates[:, 1] >= start_lower))[0]
    end_indices = np.where((center_coordinates[:, 1] <= end_upper) & (center_coordinates[:, 1] >= end_lower))[0]

    # Choose a random index within the start and end range
    random_start_idx = np.random.choice(start_indices)
    random_end_idx = np.random.choice(end_indices)
    
    dist_matrix = distance_matrix(center_coordinates, center_coordinates)
    max_move_dist = 250

    path = generate_path(center_coordinates, random_start_idx, random_end_idx, max_move_dist, dist_matrix)
    
    # Create a custom colormap with one color for all classes
    cmap = plt.get_cmap("tab20b")
    colors = [cmap(i) for i in range(20)]
    colors = colors * (max(outputs["instances"].pred_classes) + 1)
    colors = [(int(255*c[0]), int(255*c[1]), int(255*c[2])) for c in colors]

    visualizer = Visualizer(
        img[:, :, ::-1],
        scale=0.8, 
        instance_mode=ColorMode.IMAGE_BW, 
    )
    visualizer._instance_mode = ColorMode.IMAGE
    visualizer.metadata.thing_colors = colors

    filtered_instances = outputs["instances"][path]
    out = visualizer.draw_instance_predictions(filtered_instances.to("cpu"))

    # Saving the image as a .jpeg file
    location = f"./outputs/+ {filename}"
    cv2.imwrite(location, out.get_image()[:, :, ::-1])
    
    out1 = visualizer.draw_instance_predictions(instances.to("cpu"))
    cv2.imwrite('./class/class.png', out1.get_image()[:, :, ::-1])
    return location
    

    
@app.route('/', methods=['GET', 'POST'])
def process_image():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            return 'No file part'
        file = request.files['file']
        # if user does not select file, browser also submit an empty part without filename
        if file.filename == '':
            return 'No selected file'
        if file and file.filename.endswith('.png'):
            
            
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            # Here you can process your image
            print(file_path)
            location = process_uploaded_image(file_path, filename)
            # Let's assume you just want to return it back as is for this example
            return send_file(location, mimetype='image/png')

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_file(os.path.join(app.config['UPLOAD_FOLDER'], filename), mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(debug=True)