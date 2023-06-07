# Project Spray Wall Route Generator

## Description

This project is dedicated to making spray wall climbing more accessible by creating an automated route generator. It uses an innovative approach of image segmentation and unique algorithms to automatically generate climbing routes from a photo of any spray wall.

## Content of the repository

- `backend`: This directory contains all the backend code necessary for processing the image of the climbing wall, detecting holds, and generating the climbing route. Functional flask backend. Also contains model weights.
- `training / testing ipynb`: Jupyter notebooks with code and explanation on how we trained and tested the models.
- `src`: Source files that include essential scripts and utilities that are employed throughout the project.
- `.gitattributes`: Git attributes file that helps Git understand the file contents to better handle the files.
- `.gitignore`: This file specifies intentionally untracked files that Git should ignore.
- `ModelTesting.ipynb`: Jupyter notebook that includes the testing procedures and results of our model.
- `README.md`: (You're reading it!) This file provides an overview of the project.
- `Training_Mask_RCNN_Climbing.ipynb`: Jupyter notebook that includes the training procedures of our Mask RCNN model.
- `package-lock.json` & `package.json`: Configuration files that document the exact versions of packages that the project depends on.

## How it works

The project combines the use of the Detectron2 model with two uniquely designed algorithms. The Detectron2 model is employed for object detection and instance segmentation to accurately identify climbing holds. The designed algorithms introduce a degree of randomness into route generation, reflecting a broader spectrum of real-world climbing scenarios.

## Future direction

We aim to enhance the project by incorporating more advanced algorithms and improving the user interface. We also plan to extend the model training with a larger and more diverse dataset to improve the accuracy of climbing holds detection.

## Installation & Usage

More instructions on how to install and use the project will be added shortly.

## Contributing

This project is open source, and we welcome anyone who wants to contribute or build upon this work. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgement

We would like to thank Facebook AI Research (FAIR) for creating the Detectron2 model and the climbing community for their support and feedback during this project.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
