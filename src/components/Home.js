import React from 'react'
import { FiGithub,FiLinkedin,FiInstagram,FiTwitter} from "react-icons/fi";
import styled from 'styled-components'
import { TbBrandPython } from "react-icons/tb";
import { FaReact,FaJava,FaFigma,FaIndustry } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { HiDownload } from "react-icons/hi";
import {ReactComponent as DearamLogo} from "./dearamlogo.svg";
import Resume from "./ram_prasath_resume.pdf";

function Home() {

  return (
    <div>
    <Homepage>
      <Right>
        <Content>
          <Main>
            <Hello>
                Hey Folks<span class="wave">🐣</span>
            </Hello>
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
          <ResumeContent>
              <Rbutton href={Resume} download="ramprasath_resume">
                <span>Resume</span>
                <DearamLogo className='dearam'/>
                <HiDownload className=''/>
              </Rbutton>
          </ResumeContent>
        </Content>
      </Right>
      <Left>  
        <Circle>
          <img src='./images/modifiedcircle.png' alt='dearam'/>
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
          <Icon href="https://www.linkedin.com/in/dearam/">
          <FiLinkedin/>
          </Icon>
          <Icon href="https://www.instagram.com/_dearam_3/">
          <FiInstagram/>
          </Icon >
          <Icon href="https://twitter.com/_dearam_3">
          <FiTwitter/>
          </Icon>
        </Icons >
        </Iconbar>
        
      </Left>
    </Homepage>
    </div>
  )
}

const Rbutton=styled.a`
  display:flex;
  align-items:center;
  text-decoration:none;
  position:relative;
  font-size:14px;
  height:20px;
  justify-content:center;
  padding:10px 20px 10px 20px;
  border: 1px #fff solid;
  border-radius:10px;
  gap:5px;
  background-color: #0a012a;
  font-family:poppins;
  color:white;
  .dearam{
    display:none;
  }
  
  &:hover{
    /* box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ; */
    transform: scale(1.02);
    z-index: 1;
    border: 2px #9E3FFD solid;
    span{
      display:none;
    }
    .dearam{
      display:flex;
      height:18px;
      widht:10px;
    }
  }
`;
const ResumeContent=styled.div`
top:5px;
display: flex;
position: relative;
border-radius: 10px;
justify-content:center;
gap: 20px;
color: #fff;
@media (max-width:768px) and (min-width:500px){
  
}
@media (max-width:1280px) and (min-width:769px){
  
}
@media (max-width:1440px) and (min-width:1290px){
  
}
`;
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
  @media (max-width:768px) and (min-width:500px){
    font-size:10px;
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    font-size:19px;
  }
`;
const ColIcon=styled.div`
  font-size: 13px;
  position: relative;
  top: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width:768px) and (min-width:500px){
    font-size:10px;
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    font-size:19px;
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
  @media (max-width:768px) and (min-width:500px){
    
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    font-size:19px;
  }
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
  display:flex;
  flex-direction:column;
  position: relative;
  top:0;
  margin: 0px;
  padding: 20px;
`;
const Hello=styled.div`
  font-size: 50px;
  font-weight: 600;
  font-family: poppins;
  color: #fff;  
  margin: 10px 20px 50px 20px;
  .hey{
    color:#9E3FFD;
  }
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
  @media (max-width:320px){
    
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
    position:relative;
    top:30px;
    font-size:40px;
      
    }
    @media (max-height:651px) and (min-height:500px){
      
    }
    @media (max-height:700px) and (min-height:651px){
      
    }
    @media (max-height:800px) and (min-height:700px){
      
    }
    @media (max-height:900px) and (min-height:800px){
      
    }
  }
  @media (max-width:768px) and (min-width:426px){
    
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    font-size:70px;
  }
`;
const Content=styled.div`
  position: relative;
  height:100%;
  @media (max-width:768px){
    position: relative;
    top: -50px;
    height:110%;
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
  top: -30px;
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
  @media (max-width:768px) and (min-width:500px){
    
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    
  }
`;

const Scontent=styled.div`
  background-color: #0a012a;
  padding: 20px;
  width:80%;
  border-radius: 10px;
  border: 1px #fff solid;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  top: 10%;
  position: relative;
  margin: 0px 0px 0px 20px;
  &:hover{
    /* box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ; */
    transform: scale(1.05);
    z-index: 1;
    border: 2px #9E3FFD solid;
  }
  @media (max-width:768px) and (min-width:500px){
    
  }
  @media (max-width:1024px) and (min-width:769px){
    
  }
  @media (max-width:1280px) and (min-width:1025px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    font-size:22px;
  }
  @media (max-width:1600px) and (min-width:1441px){
    font-size:24px;
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

  @media (max-width:320px){
    
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
      
    @media (max-height:500px){
      
    }
    @media (max-height:620px) and (min-height:500px){
      
    }
    @media (max-height:700px) and (min-height:620px){
      
    }
    @media (max-height:800px) and (min-height:700px){
      
    }
    @media (max-height:900px) and (min-height:800px){
      
    }
  }

  @media (max-width:768px) and (min-width:426px){
    
  }
  @media (max-width:1024px) and (min-width:769px){
    
  }
  @media (max-width:1280px) and (min-width:1025px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    
  }
  @media (max-width:1600px) and (min-width:1441px){
    font-size:25px;
  }
`;
const Name=styled.div`
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 2px;
  @media (max-width:320px){
    font-size:32px;
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
    font-size:32px;
    @media (max-height:500px){
      
    }
    @media (max-height:651px) and (min-height:500px){
      
    }
    @media (max-height:700px) and (min-height:651px){
      
    }
    @media (max-height:800px) and (min-height:700px){
      
    }
    @media (max-height:900px) and (min-height:800px){
      
    }
  }
  @media (max-width:768px) and (min-width:426px){
    position:relative;
    top:10%;
    font-size: 33px;
    letter-spacing: 3px;
  }
    @media (max-width:1024px) and (min-width:769px){
      
    }
    @media (max-width:1280px) and (min-width:1025px){
      
    }
    @media (max-width:1440px) and (min-width:1290px){
      font-size:37px;
    }
    @media (max-width:1600px) and (min-width:1441px){
      font-size:38px;
    }
`;
const Intro=styled.div`
  color: #fff;
  left: 16%;
  line-height: 80px;
  font-family: poppins;
  position: relative;
  top:55%;
  width: 70%;
  text-align: center;
  @media (max-width:320px){
    width: 100%;
      top: 70%;
      left: 0;
      position: absolute;
      line-height: 70px;
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
      width: 100%;
      top: 70%;
      left: 0;
      position: absolute;
      line-height: 70px;
    
    @media (max-height:656px){
      top:20%;
    }
    @media (max-height:700px) and (min-height:656px){
      
    }
    @media (max-height:800px) and (min-height:700px){
      
    }
    @media (max-height:900px) and (min-height:800px){
      
    }
  }
  
    @media (max-width:768px) and (min-width:426px){
      width: 100%;
      top: 30%;
      left: 15%;
      position: absolute;
      line-height: 70px;
    }
    @media (max-width:1024px) and (min-width:769px){
      
    }
    @media (max-width:1280px) and (min-width:1025px){
      line-height: 50px;
    }
    @media (max-width:1440px) and (min-width:1290px){
      
    }
    @media (max-width:1600px) and (min-width:1441px){
      
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
  @media (max-width:768px) and (min-width:500px){
    
  }
  @media (max-width:1280px) and (min-width:769px){
    font-size:22px;
  }
  @media (max-width:1440px) and (min-width:1290px){
    font-size:23px;
  }
  @media (max-width:1600px) and (min-width:1441px){
    font-size:25px;
  }
`;
const Icons=styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
//undertext
const Right=styled.div`
  flex: 1;
  @media (max-width:320px){
    position: relative;
      flex: 3;
      background-color: white;
      border-radius: 0;
    @media (max-height:690px){
      
    }
  }
  @media (max-width:376px) and (min-width:320px){
    position: relative;
      flex: 2;
      height:20vh;
      background-color: white;
      border-radius: 0;
  }
  @media (max-width:426px) and (min-width:376px){
    position: relative;
      flex: 2;
      background-color: white;
      border-radius: 0;
    @media (max-height:651px) and (min-height:500px){
      
    }
    @media (max-height:700px) and (min-height:651px){
      
    }
    @media (max-height:800px) and (min-height:700px){
      
    }
    @media (max-height:850px) and (min-height:800px){
      
    }
  }
  @media (max-width:768px) and (min-width:426px){
    position: relative;
      flex: 3;
      background-color: white;
      border-radius: 0;
  }
`;

// photo
const Left=styled.div`
  flex: 1.5;
  background-color: #0a012a;
  height: 100vh;
  border-radius: 1000px 0px 0px 1000px;
  border: 2px solid #9E3FFD;
  justify-content: center;
  align-items: center;

  @media (max-width:320px){
    flex: 2;
      border:none;
      height:50vh;
      background-color: #0a012a;
      position: relative;
      border-radius: 0;
    @media (max-height:690px){
      
    }
  }
  @media (max-width:376px) and (min-width:320px){
    flex: 1;
    border:none;
    height:50vh;
    background-color: #0a012a;
    position: relative;
    border-radius: 0;
  }
  @media (max-width:426px) and (min-width:376px){
    flex: 1;
      border:none;
      height:50vh;
      background-color: #0a012a;
      position: relative;
      border-radius: 0;
    @media (max-height:651px) and (min-height:500px){
      
    }
    @media (max-height:700px) and (min-height:651px){
      
    }
    @media (max-height:800px) and (min-height:700px){
      
    }
    @media (max-height:850px) and (min-height:800px){
      flex:1.5;
      height:60vh;
    }
  }
  @media (max-width:768px) and (min-width:426px){
    flex: 1;
      border:none;
      height:50vh;
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
  @media (max-width:320px){
    top:10%;
    left:28%;
    height: 120px;
    width: 160px;
    @media (max-height:690px){
      top:10%;
      left:28%;
      height: 90px;
      width: 130px;
    }
  }
  @media (max-width:426px) and (min-width:320px){
    top:10%;
    left:28%;
    height: 120px;
    width: 160px;
    @media (max-height:500px){
      display:none;
    }
    @media (max-height:662px) and (min-height:500px){
      display:none;
    }
    @media (max-height:700px) and (min-height:662px){
      height: 90px;
      width: 130px;
    }
    @media (max-height:800px) and (min-height:700px){
      height: 100px;
      width: 140px;
    }
    @media (max-height:900px) and (min-height:800px){
      height: 120px;
      left:25%;
      width: 160px;
    }
    @media (min-height:900px){
      height: 130px;
      left:24%;
      width: 170px;
    }
  }
  @media (max-width:768px) and (min-width:426px){
    top:10%;
    left:4%;
    height: 120px;
    width: 160px;
  }
  @media (max-width:1024px) and (min-width:769px){
    height: 100px;
    width: 130px;
    left:27%;
  }
  @media (max-width:1280px) and (min-width:1025px){
    left:31%;
    height: 100px;
    width: 130px;
  }
  @media (max-width:1440px) and (min-width:1290px){
    left:30%;
    height:120px;
    width:160px;
  }
  @media (max-width:1600px) and (min-width:1441px){
    left:29%;
    height:130px;
    width:175px;
  }
`;
const Homepage=styled.div`
  position: absolute;
  width: 95%;
  display: flex;
  // background-image: linear-gradient( #120440 ,#d7d6dc);
  background-image: linear-gradient(#120440,#6C8EBF); 
  left: 5%; 
  @media (max-width:320px){
    left: 0;
    width: 100%;
    display: flex;
    height: 150vh;
    flex-direction: column-reverse;
    @media (max-height:690px){
    
    }
  }
  @media (max-width:426px) and (min-width:320px){
    left: 0;
    width: 100%;
    display: flex;
    height: 150vh;
    flex-direction: column-reverse;
    @media (max-height:500px){
      
    }
    @media (max-height:662px) and (min-height:500px){
      height: 130vh;
    }
    @media (max-height:700px) and (min-height:662px){
      height: 130vh;
    }
    @media (max-height:800px) and (min-height:700px){
      height: 120vh;
    }
    @media (max-height:900px) and (min-height:800px){
      height: 115vh;
    }
    @media (min-height:900px){
      height: 115vh;
    }
  }
  @media (max-width:768px) and (min-width:426px){
    left: 0;
    width: 100%;
    display: flex;
    height: 150vh;
    flex-direction: column-reverse;
  }
  @media (max-width:965px) and (min-width:769px){
    left: 0;
    width: 100%;
    display: flex;
    height: 160vh;
    flex-direction: column-reverse;
  }
  @media (max-width:1024px) and (min-width:966px){
    
  }
  @media (max-width:1280px) and (min-width:1025px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    
  }
  @media (max-width:1600px) and (min-width:1441px){
    
  }       
`;

export default Home
