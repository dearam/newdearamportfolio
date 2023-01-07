import React from 'react'
import { RiContrast2Line } from 'react-icons/ri';
import { FiGithub,FiLinkedin,FiInstagram,FiTwitter} from "react-icons/fi";
import styled from 'styled-components'
import { TbBrandPython } from "react-icons/tb";
import { FaReact,FaJava,FaFigma,FaIndustry } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

function Home() {
  return (
    <>
    <Homepage>
      <Right>
        <Content>
          <Main>
            <Hello>Hey Folks<span class="wave">🐣</span></Hello>
            <Scontent>
              I'm Ram prasath Front-end Developer. My motivation and love for development as well as good design have brought me to where I am today. Every day I try to keep up with latest technology trends. I developed some basic apps with use of Reactjs. Apart from technologies I love to do digital illustration,Photographic📷 and hear songs🎶. Learn from Surroundings Earn From own Knowledge💙.
            </Scontent>
          </Main>
          <Grid>
          <Subcontent>
              <Stitle>
                My Regular uses technologies
              </Stitle>
              <Techs>
                <Tech><TbBrandPython/></Tech>
                <Tech><FaReact/></Tech>
                <Tech><FaJava/></Tech>
                <Tech><DiJavascript/></Tech>
                <Tech><FaFigma/></Tech>
              </Techs>
            </Subcontent>
            <Subcontent>
              <AContent>
                <CIcon>
                  <PICon>
                    <FaIndustry/>
                  </PICon>
                  PSNA
                </CIcon>
                <ColIcon>
                  <Ptitle>Information technology</Ptitle>
                  PSNA COLLEGE
                </ColIcon>
              </AContent>
            </Subcontent>
            
          </Grid>
            
        </Content>
      </Right>
      <Left>  
        <Circle>
          <img src='./images/dearamcircle.png'/>
        </Circle>
        <Intro>
          <Name>Ram Prasath M V</Name>
          <About>
          <p class="line-1 anim-typewriter">Student at PSNA • Front-end Developer • Reactjs</p>
          </About>
        </Intro>
        <Iconbar>
        <Icons>
          <Icon href="https://github.com/dearam">
            <FiGithub/>
          </Icon>
          <Icon>
          <FiLinkedin/>
          </Icon>
          <Icon>
          <FiInstagram/>
          </Icon>
          <Icon>
          <FiTwitter/>
          </Icon>
        </Icons>
        </Iconbar>
        
      </Left>
    </Homepage>
    </>
  )
}

const Ptitle=styled.div`
  font-size: 15px;
`;
const PICon=styled.div`
  font-size: 30px;
`;
const CIcon=styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  @media (max-width:768px){
    font-size: 10px;
  }
`;
const ColIcon=styled.div`
  font-size: 13px;
  position: relative;
  top: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width:768px){
    font-size: 10px;
  }
`;
const AContent=styled.div`
  position: relative;
  top: 15%;
  left: 5%;
  display: flex;
  gap: 20px;
  flex-direction: row;
  @media (max-width:768px){
    gap: 6px;
  }
`;
const Stitle=styled.div`
  font-family: poppins;
  font-size: 14px;
  font-weight: 500;
`;
const Techs=styled.div`
  display: grid;
  grid-gap: 10px;
  font-size: 35px;
  grid-template-columns: repeat(5,minmax(0,1fr));
  @media (max-width:768px){
    font-size: 20px;
  }
`;

const Tech=styled.div`
  color: #fff;
  &:hover{
    color: #9E3FFD;
  }
`;
const Main=styled.div`
  position: relative;
  margin: 30px;
  padding: 10px;
`;
const Hello=styled.div`
  font-size: 50px;
  font-weight: 600;
  font-family: poppins;
  color: #fff;
  margin: 10px 10px 50px 0px;
  .wave {
    animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s;        /* Change to speed up or slow down */
    animation-iteration-count: infinite;  /* Never stop waving :) */
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes wave-animation {
      0% { transform: rotate( 0.0deg) }
      10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
      20% { transform: rotate(-8.0deg) }
      30% { transform: rotate(14.0deg) }
      40% { transform: rotate(-4.0deg) }
      50% { transform: rotate(10.0deg) }
      60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
      100% { transform: rotate( 0.0deg) }
}
`;
const Content=styled.div`
  position: relative;
  @media (max-width:768px){
    position: relative;
    top: -50px;
      background-color: #111;
    }
`;
const Grid=styled.div`
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-gap: 10px;
  position: relative;
  margin: 0px 30px 0px 30px;
  padding: 0px 10px 0px 10px;
  top: -40px;
`;
const Subcontent=styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px #fff solid;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
  position: relative;
  background-color: #0a012a;
  color: #fff;
  top: 20%;
  &:hover{
    /* box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ; */
    transform: scale(1.05);
    z-index: 1;
    border: 2px #9E3FFD solid;
  }
`;

const Scontent=styled.div`
  background-color: #0a012a;
  padding: 20px;
  border-radius: 10px;
  border: 1px #fff solid;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  top: 20%;
  position: relative;
  &:hover{
    /* box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ; */
    transform: scale(1.05);
    z-index: 1;
    border: 2px #9E3FFD solid;
  }
`;



const About=styled.div`
  .line-1{
    position: relative;
    top: 50%;  
    width:25em;
    margin: 0 auto;
    border-right: 2px 1px solid rgba(255,255,255,.75);
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);  
    @media (max-width:768px){
      top: 0;
      left: 0;
    }
    }
.anim-typewriter{
  animation: typewriter 4s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
             
  }
  @keyframes typewriter{
    from{width: 0;}
    to{width: 25em;}
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}  
  }
`;
const Name=styled.div`
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 2px;
  @media (max-width:768px){
      font-size: 33px;
      letter-spacing: 3px;
    }
`;
const Intro=styled.div`
  color: #fff;
  left: 20%;
  line-height: 80px;
  font-family: poppins;
  position: relative;
  top: 50%;
  width: 70%;
  text-align: center;
  @media (max-width:1100px){
        line-height: 50px;
      } 
      @media (max-width:768px){
      width: 100%;
      top: 65%;
      left: 0;
      position: absolute;
      line-height: 70px;
    }
`;
const Iconbar=styled.div`
  width: 5%;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  @media (max-width:768px){
      display: none;
    }
`;

const Icon=styled.a`
  position: relative;
  color: #fff;
  font-weight: 100;
  font-size: 20px;
  &:hover{
    color: #9E3FFD;
  }
`;
const Icons=styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
const Circle=styled.div`
  height: 90px;
  width: 120px;
  position: relative;
  top: 18%;
  left: 33%;
  img{
    border: solid #fff;
    border-radius: 50%;
    border:  #fff 5px solid;
    height: 300%;
    width: 220%;
    @media (max-width:768px){
      height: 170%;
      border:  #fff 5px solid;
      width: 120%;
    }
  }
  @media (max-width:768px){
    top: 10%;
  }
`;
const Homepage=styled.div`
  position: absolute;
  width: 95%;
  display: flex;
  background-color: #111;
  left: 5%;
  @media (max-width:768px){
      left: 0;
      width: 100%;
      display: flex;
      height: 160vh;
      flex-direction: column-reverse;
  }
`;

export default Home