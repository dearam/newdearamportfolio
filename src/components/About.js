import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Aboutpage>
      <Right>
        <Card1>
        <Card2>
          Be like Jon snow
        </Card2>
        </Card1>
      </Right>
      <Left>
      <h1>Aboutpage uhh</h1>
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
  background-color: #0a012a;
  height: 100vh;
  border-radius: 1000px 0px 0px 1000px;
  border: 2px solid #9E3FFD;
  justify-content: center;
  align-items: center;
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
  background-color: #9E3FFD;
  border: 10px #111 solid;
  border-radius: 20px;
  `;

export default About