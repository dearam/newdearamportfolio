import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Aboutpage>
      <Right>
        <Card1>
        <Card2>
          <img src='./images/cardimg.jpg'/>
        </Card2>
        </Card1>
      </Right>
      <Left>
        <Title>
          <Subtitlecontent>
          <Subtitle>Who I am</Subtitle><Purpleline/>
          </Subtitlecontent>
          <Maintitle>About Me</Maintitle>
        </Title>
      <Content>
        <Para1>
        I'm Ram Prasath, a Enginnering student IT department at PSNA. I'm passionate
        about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development, Python, Flutter and UI designer.
        </Para1>
        <Para2>
        I develop websites with . I have top skills in using design softwares like
        Figma, Adobe XD and PhotoShop.I'm also interested in problem & and Machine learning.
        </Para2>
        <Para3>
        Being a diligent, hardworking and result oriented Boy, I always work towards achieving best result on each project I lay my hands on.
        </Para3>
      </Content>
      </Left>

    </Aboutpage>
  )
}


const Aboutpage=styled.div`
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
const Card1=styled.div`
  position: relative;
  height: 70%;
  width: 60%;
  top: 10%;
  left: 10%;
  background-color: #fff;
  border-radius: 20px;
  /* box-shadow: #fff 0px 26px 30px -10px,
  #fff 0px 16px 10px -10px ; */
`;
const Card2=styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 10%;
  left: 10%;
  /* background-color: #0a012a; */
  background-image: linear-gradient(#232140,#d7d6dc);
  /* border: 10px #111 solid; */
  border-radius: 20px;
  img{
    position: relative;
    height: 95%;
    margin: 10px;
    border-radius: 20px;
    width: 95%;
  }
  `;
const Content=styled.div`
  background-color: #fff;
  margin: 20px 0px 10px 0px;
  padding: 20px;
`;
const Title=styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Subtitlecontent=styled.div`
  display: flex;
  flex-direction: row;
  padding: 60px 0px 5px 0px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Subtitle=styled.div`    
  color: #9E3FFD;
  position: relative;
  display: flex;
`;
const Maintitle=styled.div`
  position: relative;
  display: flex;
  font-size: 35px;
  color: #ffffff;
  font-family: poppins;
  font-weight: 600;
  font-style: bold;
`;

const Para1=styled.div`
  font-family: poppins;
  font-weight: 400;
  font-style: light;
`;
const Para2=styled.div`
  font-family: poppins;
  font-weight: 400;
  font-style: light;
`;
const Para3=styled.div`
  font-family: poppins;
  font-weight: 400;
  font-style: light;
`;
const Purpleline=styled.div`
  height: 2px;
  width: 100px;
  background-color: #fff;
`;
export default About