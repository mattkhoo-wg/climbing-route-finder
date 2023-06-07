import './App.css';
import React from 'react';
import {useState} from 'react';
import {styled, darkTheme} from './ui/stitches.config';
import { 
  HorizontalFlexBoxWithColor, 
  ParagraphBox, 
  MiniParagraphBox,
  TopBox,
  Content,
  BraggingBox,
  HorizontalFlexBox,
  InteranalParagraphBox,
  InteranalParagraphBoxDisapear,
  InteranalParagraphBoxDisapearLater,
  Top,
  Bottom,
  ParagraphContainer 
} from './ui/components';

function App() {
  const [spray, setSpray] = useState('/spray1');

  const handleSpray1 = () => {
    setSpray('/spray1');
  }

  const handleSpray2 = () => {
    setSpray('/spray2');
  }

  const handleSpray3 = () => {
    setSpray('/spray3');
  }

  const handleSpray4 = () => {
    setSpray('/spray4');
  }

  const Bg = styled('div', {
    backgroundColor: '$background',
    height: '100%',
    textAlign: 'center',
    '@vbp1': {
      height: '100vh',
    },
  })

  return (
    <Bg>
    <Content>
      <TopBox>
        <HorizontalFlexBoxWithColor>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ParagraphBox style={{paddingBottom: "20px"}}>
              <b>
                Segmenation and
                <br></br>
                Classification of Climbing Holds
              </b>
            </ParagraphBox>
            <MiniParagraphBox>
              By: Matthew Khoo and Alessandro Bifulco
            </MiniParagraphBox>
          </div>
          <ParagraphBox >
            <img style={{width: '100%', height: '100%', borderRadius: '10px', marginTop: '10px' }}src={process.env.PUBLIC_URL + '/cover.jpg'} alt='logo' />
          </ParagraphBox>
        </HorizontalFlexBoxWithColor>
          <div
            style={{
              background: 'white',
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: '1 1 ',
              height: '100%',
            }}
          >
            <BraggingBox>
              <HorizontalFlexBox>
                <InteranalParagraphBoxDisapearLater>
                  <Top>100+</Top>

                  <Bottom> Errors </Bottom>
                </InteranalParagraphBoxDisapearLater>

                <InteranalParagraphBoxDisapear>
                  <Top>10+h</Top>
                  <Bottom>Training time </Bottom>
                </InteranalParagraphBoxDisapear>

                <InteranalParagraphBox>
                  <Top>20/20</Top>
                  <Bottom>Vision</Bottom>
                </InteranalParagraphBox>
              </HorizontalFlexBox>
            </BraggingBox>
            <ParagraphBox>
              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', paddingTop: '20px', marginBottom: '20px'}}>
                    Problem Description
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                    Rock climbing, bouldering in particular, has become one of the fastest growing sports in America today. It is a sport that is both technical and physical, which is enjoyed by participants who vary in size, strength and ability. An integral part to the enjoyment of the sport is how the holds are set, since it dictates the difficulty of the climb. The routes are often left on the walls for over a month and climbers may end up climbing the same route multiple times which can get boring. In most climbing gyms there will often be a wall that is densely packed with holds of varying shapes and sizes (spray wall) - as seen below. 
                  </p>
                  <img style={{width: '80%', height: '50%', borderRadius: '10px', marginTop: '10px', marginLeft: '10%' }} src={process.env.PUBLIC_URL + '/spray_cropped.png'} alt='spray wall image' />
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '5px', marginBottom: '5px', lineHeight:"28px"}}>
                    The spray wall represents limitless routes, but it can often be overwhelming to set your own route, especially if you are new to the sport. Our project wants to be able to make spray walls more accessible by allowing climbers to take a photo of any spray wall and have a route generated for them immediately.
                  </p>
                </div>
              </ParagraphContainer>
              <ParagraphContainer>  
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Previous Work
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                  We identified that this would be done best by segmentation, that way we could highlight the holds well. After researching and experimenting with multiple models our group decided to use a mask R-CNN model that was pre trained on the COCO dataset, built and trained using Facebook AI Research’s (FAIR) Detectron2 framework. The model uses Resnet101 and a Feature Pyramid Network to create feature maps which are then passed into the Region Proposal Network (RPN) to generate object regions.. The regions are then flattened and passed into the Region of Interest (ROI) head, which generates bounding boxes and performs segmentation and classification.
                  </p>
                </div>
                <img style={{width: '220px', height: '220px', borderRadius: '10px', marginTop: '10px', marginLeft: '25px' }} src={process.env.PUBLIC_URL + '/dete.png'} alt='spray wall image' />
              </ParagraphContainer>
              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Approach
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                    We trained the model on climbing holds data found on a website called Roboflow. They have semi-decent datasets in COCO format. We then randomly selected a start and end hold given how long we wanted the climbing route to be. We had 2 different algorithms we implemented to identify holds from the start hold to the end hold. Our first - was a basic algorithm that calculated all the possible holds that could be reached from the start hold and then chose the hold which was the closest to the final hold. Our second algorithm selected a random hold from all possible holds you could move to and the randomness was influenced based on the distances of the possible holds to the end hold.
                  </p>
                </div>
              </ParagraphContainer>
              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Datasets
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                    Our group used a pre labeled dataset on roboflow called <a href='https://universe.roboflow.com/master/climbing-hold/images/gvXx34o978YhbOsiFymU' target='_blank'>climb</a>. This dataset had climbing holds labeled with both bounding boxes and segmented polygons. The data was provided in the COCO label format which made it easy to work using a library called cocoapi. 
                  </p>
                </div>
              </ParagraphContainer>
              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Results
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                    Images:
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button className="ImageButton" onClick={handleSpray1}>
                      <img style={{width: '200px', height: '200px', borderRadius: '10px'}} src={process.env.PUBLIC_URL + '/spray1.png'} alt='spray wall image 1' />
                    </button>
                    <button className="ImageButton" onClick={handleSpray2}>
                      <img style={{width: '200px', height: '200px', borderRadius: '10px'}} src={process.env.PUBLIC_URL + '/spray2.png'} alt='spray wall image 2' />
                    </button>
                    <button className="ImageButton" onClick={handleSpray3}>
                      <img style={{width: '200px', height: '200px', borderRadius: '10px'}} src={process.env.PUBLIC_URL + '/spray3.png'} alt='spray wall image 3' />
                    </button>
                    <button className="ImageButton" onClick={handleSpray4}>
                      <img style={{width: '200px', height: '200px', borderRadius: '10px'}} src={process.env.PUBLIC_URL + '/spray4.png'} alt='spray wall image 4' />
                    </button>
                  </div>
                  <div>
                    <img style={{width: '400px', height: '400px', borderRadius: '10px', marginTop: '25px', marginLeft: '300px' }} src={process.env.PUBLIC_URL + spray + '/0.png'} alt='spray wall image 4' />
                  </div>
                  <h2 style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '25px', marginBottom: '0', lineHeight:"28px", marginLeft: '25px'}}>Euclidean Distance</h2>
                  <div>
                    <img style={{width: '308px', height: '308px', borderRadius: '10px', marginTop: '15px', marginLeft: '18px' }} src={process.env.PUBLIC_URL + spray + '/e1.png'} alt='spray wall image 4' />
                    <img style={{width: '308px', height: '308px', borderRadius: '10px', marginTop: '15px', marginLeft: '18px' }} src={process.env.PUBLIC_URL + spray + '/e2.png'} alt='spray wall image 4' />
                    <img style={{width: '308px', height: '308px', borderRadius: '10px', marginTop: '15px', marginLeft: '18px' }} src={process.env.PUBLIC_URL + spray + '/e3.png'} alt='spray wall image 4' />
                  </div>
                  <h2 style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '25px', marginBottom: '0', lineHeight:"28px", marginLeft: '25px'}}>Random Euclidean Distance</h2>
                  <div>
                    <img style={{width: '308px', height: '308px', borderRadius: '10px', marginTop: '15px', marginLeft: '18px' }} src={process.env.PUBLIC_URL + spray + '/r1.png'} alt='spray wall image 4' />
                    <img style={{width: '308px', height: '308px', borderRadius: '10px', marginTop: '15px', marginLeft: '18px' }} src={process.env.PUBLIC_URL + spray + '/r2.png'} alt='spray wall image 4' />
                    <img style={{width: '308px', height: '308px', borderRadius: '10px', marginTop: '15px', marginLeft: '18px' }} src={process.env.PUBLIC_URL + spray + '/r3.png'} alt='spray wall image 4' />
                  </div>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '15px', marginBottom: '5px', lineHeight:"28px"}}>
                    As can be seen, the random euclidean distance provides a larger variety of routes than the euclidean distance. This is because the random euclidean distance is not always trying to find the fastest way to get to the top and can therefore create routes that are more interesting.
                    However, the random euclidean distance can create routes that are impossible to climb. Furthermore, because of the randomness there are instances when the holds become clustered together and the route becomes too easy or it just doesn't make sense.
                  </p>
                </div>
              </ParagraphContainer>
              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Problems Encountered
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                  One of our biggest challenges was that it was difficult to find a detailed enough dataset that would serve the needs of our project. Many datasets we found had missing labels and this led us to attempt to create our own dataset, which was incredibly tedious. Our initial idea was to make our own small dataset with data that was specifically tailored to our application, route finding. We would then use a transfer learning model and train it on the small dataset. However, our images were of varying sizes and when they were resized too much information was lost from some images to produce any proper segmentation. 
                  <br/><br/>
                  We also ran into many bugs regarding matrix input output sizings when attempting to train our models, particularly some of our early approaches attempting to use transfer learning via a pretrained alexnet encoder and custom decoder. We ended up scraping this approach due to the problems we ran into. We also tried U-net and experienced a similar fate. 
                  </p>
                </div>
              </ParagraphContainer>
              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Next Steps
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                    In our future steps, we plan to explore various ideas to enhance our automated route generation for climbing gyms. This includes training neural networks to create convincing human-like climbing routes (instead of our handmade heuristics), utilizing stable diffusion models to generate entirely novel and unique routes / walls, and building our own fine-tuned dataset specifically tailored for climbing hold detection and route generation to get better performance for spray walls. By pursuing these avenues, we aim to revolutionize the climbing experience, providing climbers with a wide range of engaging, challenging, and diverse routes while making spray walls more accessible to all.
                  </p>
                </div>
              </ParagraphContainer>
              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Approach
                  </p>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '18px', marginTop: '0', marginBottom: '5px', lineHeight:"28px"}}>
                  Our approach stands apart from others due to several distinctive aspects. Firstly, we observed a conspicuous absence of automated route generation for climbing in the existing landscape, suggesting the novelty of our problem. While there were attempts to detect holds, many leveraged rudimentary object detection methods, such as canny edge detection and blob detection. Although we did come across some approaches employing image segmentation, they were limited, reaffirming our confidence that convolutional neural networks would be an effective tool for this task.
                  <br/><br/>
                  Moreover, the route generation component of our project is pioneering in its application. While the algorithms we utilized are standard topics in computer science curricula worldwide, their implementation in this context is novel. It demonstrates how conventional tools can be adapted creatively to address novel problems in sport and recreation.
                  <br/><br/>
                  In the spirit of this class, we will be publishing all our work in an open-source format, readily accessible for others to review, iterate upon, and innovate further. We anticipate seeing how others may develop our approaches, contributing to the evolving body of knowledge surrounding sports technology and climbing route optimization
                  </p>
                </div>
              </ParagraphContainer>

              <ParagraphContainer>
                <div style={{textAlign: 'left'}}>
                  <p style={{color: 'rgb(97, 97, 97)', fontSize: '30px', marginTop: '0', fontWeight: 'bold', marginBottom: '20px'}}>
                    Video
                  </p>
                  <div style={{color: 'rgb(97, 97, 97)', textAlign: 'center'}}>
                    Insert Video
                  </div>
                </div>
              </ParagraphContainer>

            </ParagraphBox>
          </div>
        </TopBox>
      </Content>
    </Bg>
  );
}

export default App;
