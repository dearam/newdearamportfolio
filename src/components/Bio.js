import React from 'react'
import styled from 'styled-components'
import './title.scss'

function Bio() {
  return (
    <Biopage>
      <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet"/> 
      <Right>
        <Border>
          <Box>
            <Content>
              <img src='./images/cardimg.jpg'/>
              <Shade/>
              
            </Content>
          </Box>
        </Border>
        <Title>
          <div class="title-inner">
            <div class="cafe">
              <div class="cafe-inner">
                <About>
                  <div>A</div>
                  <div>B</div>
                  <div>O</div>
                  <div>U</div>
                  <div>T</div>
                </About>
                <Me>
                  <div>M</div>
                  <div>E</div>
                </Me>
                </div>
            </div>
          </div>
        </Title>
      </Right>
      <Left>
      </Left>
    </Biopage>
  )
}

const Biopage=styled.div`
  position: absolute;
  width: 95%;
  display: flex;
  background-image: linear-gradient(#232140,#d7d6dc);
  left: 5%;
  @media (max-width:768px){
      left: 0;
      width: 100%;
      display: flex;
      height: 160vh;
      flex-direction: column-reverse;
  }
`;
const Right=styled.div`
  flex: 1;
  @media (max-width:768px){
      position: relative;
      flex: 3;
      background-color: #111;
      border-radius: 0;
  }
`;
const Left=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  color: #000;
  /* border: 2px solid #9E3FFD; */
  justify-content: flex-start;
  @media (max-width:768px){
      flex: 1;
      border:none;
      background-color: #0a012a;
      position: relative;
      border-radius: 0;
  }
`;
const Box=styled.div`
  height: 96%;
  width: 90%;
  position: relative;
  left: 5%;
  background-color: #0a012a;
  border-radius: 0px 0px 1000px 1000px;
`;
const Border=styled.div`
  position: relative;
  left: 10%;
  height: 80%;
  width: 55%;
  border: 2px solid #fff;
  border-width:0px 2px 2px 2px;
  border-radius: 0px 0px 1000px 1000px;
  justify-content: center;
  align-items: center;
  animation: inner-left 1s 1s ease both;
  @keyframes outer-left{
    from {
      transform: translateY(200px);
    }
    to {
      transform: none;
    }
  }
  @keyframes inner-left {
    from {
      transform: translateY(-500px);
    }
    to {
      transform: none;
    }
  }
`;

const Content=styled.div`
  height: 94%;
  width: 90%;
  position: relative;
  left: 5%;
  top: 10px;
  img{
    height: 100%;
    object-fit: cover;
    z-index: 1;
    top: 10px;
    position: relative;
    inset: 0;
    display: block;
    width: 100%;
    border-radius: 0px 0px 1000px 1000px;
  }
  
`;
const Shade=styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 0px 0px 1000px 1000px;
  top: 0;
  background: linear-gradient(to bottom,rgba(4,8,15,0), #192133 90%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Title=styled.div`
  height: 350px;
  width: 40px;
  position: absolute;
  top: 0;
  left: 33%;
  font-size: 35px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-family: poppins;
  font-weight: 600;
`;
const About=styled.div`
  color: #fff;
`;
const Me=styled.div`
  color: #0a012a;
`;
export default Bio