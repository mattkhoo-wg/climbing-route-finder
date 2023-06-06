import './App.css';
import React from 'react';
import {styled, darkTheme} from './ui/stitches.config';
import Bubbles from './ui/bubbles';
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
  Bottom 
} from './ui/components';

function App() {
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
            {/* <Bubbles /> */}
            <img src='/public/holds.png' alt='logo' />
          </ParagraphBox>
        </HorizontalFlexBoxWithColor>
          <div
            style={{
              background: 'rgb(27, 32, 48)',
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

          </div>
        </TopBox>
      </Content>
    </Bg>
  );
}

export default App;
