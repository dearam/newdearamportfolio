import React from 'react'
import styled from 'styled-components'
import './title.scss'

function About() {
  return (
    <Aboutpage>
      <link href="https://fonts.googleapis.com/css?family=Fredoka+One" rel="stylesheet"/> 
      <Right>
        <Border>
          <Box>
            <Content>
              <img src='./images/cardimg.jpg'/>
              <Shade>
              <Svgname>
              <svg viewBox="0 0 74 14">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard" transform="translate(-9.000000, -7.000000)">
                          <g id="Group-2" transform="translate(9.000000, 7.000000)">
                              <rect id="Rectangle" fill="none" x="0" y="0" width="74" height="14" rx="4"></rect>
                              <g id="Group" transform="translate(4.000000, 3.500000)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                <path class="path" d="M 0.546 6.161 L 0.546 0.161 L 2.546 0.161 C 3.65 0.161 4.546 1.056 4.546 2.161 C 4.546 3.266 3.65 4.161 2.546 4.161 L 0.546 4.161 L 2.546 4.161 L 4.546 6.161" id="r" stroke="#9E3FFD" transform="matrix(1, 0, 0, 1, 4, 3.5)"></path> 
                                <path class="path" d="M 8.093 6.33 L 8.093 2.33 C 8.093 1.226 8.988 0.33 10.093 0.33 C 11.197 0.33 12.093 1.226 12.093 2.33 L 12.093 6.33 L 12.093 4.33 L 8.093 4.33" id="a" stroke="#FFf" transform="matrix(1, 0, 0, 1, 4, 3.5)"></path> 
                                <polyline class="path" id="m" stroke="#9E3FFD" points="21.936 0.458 21.936 6.458 18.936 3.458 15.936 6.458 15.936 0.458" transform="matrix(-1, 0, 0, -1, 41.872003, 10.416)"></polyline> 
                              </g>
                          </g>
                      </g>
                  </g>
               </svg>
              </Svgname>
              </Shade>
            </Content>
          </Box>
        </Border>
        <Title>
          <div class="title-inner">
            <div class="cafe">
              <div class="cafe-inner">
                <Aboutword>
                  <div>A</div>
                  <div>B</div>
                  <div>O</div>
                  <div>U</div>
                  <div>T</div>
                </Aboutword>
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
        <Maincard>
          <Mtitle>
            who
            <Iletter>I</Iletter>
            am</Mtitle>
          <Mbox>
            <Bar className='bar'>
            <Scroll>
            <div className="i-title-wrapper">
              <div className="i-title-item">UI Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Artist</div>
              <div className="i-title-item">Analyist</div>
              <div className="i-title-item">Guitarist</div>
              <div className="i-title-item">Video Editor</div>
            </div>
            </Scroll>
            <Collection>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle></Collection>
          </Bar>
          <BContent>
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
          </BContent>
          </Mbox>
          <Qbox>
            <img src='./images/jonsnowbg.jpg'/>
            <LShade/>
            <Jonimg><img src='./images/jonsnowcircle.png'/></Jonimg>
            <Qcontent>
              <Quote>' what matters how we face it '</Quote>
              <Author>- jon snow</Author>
            </Qcontent>
          </Qbox>
        </Maincard>
      </Left>
    </Aboutpage>
  )
}


const Jonimg=styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 8%;
  left: 0;
  z-index: 1;
  img{
    border: solid #fff;
    border-radius: 50%;
    border:  #fff 3px solid;
    height: 300%;
    width: 220%;
    @media (max-width:768px){
      height: 170%;
      border:  #fff 5px solid;
      width: 120%;
    }
  }
  @media (max-width:768px){
    height: 56px;
    width: 56px;
    }
`;

const Qcontent=styled.div`
  position:absolute;
  left: 28%;
  font-weight: 400;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction:column;
  @media (max-width:768px){
    left: 30%;
    }
`;
const Quote=styled.div`
  flex: 1;
  font-size: 70%;
  position: relative;
  letter-spacing: 1px;
  top: 35%;
  z-index: 1;
  color: #fff;
  @media (max-width:768px){
    letter-spacing: 0;
    font-size: 14px;
    }
`;
const Author=styled.div`
  flex: 1;
  font-size: 14px;
  position: relative;
  letter-spacing: 5px;
  top: 25px;
  left: 36%;
  z-index: 1;
  color: #fff;
  @media (max-width:768px){
    font-size: 12px;
    top:10px;
    left: 23%;
    }
`;

const Qbox=styled.div`
  height: 30%;
  width: 95%;
  position: relative;
  top: 5%;
  left: 5%;
  overflow: hidden;
  border-radius: 15px 15px 15px 15px;
  border: 2px solid #fff;
  box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
  img{
    height: 100%;
    object-fit: cover;
    left: 25%;
    position: relative;
    z-index: 0;
    width: 100%;
  }
  &:hover{
    border-radius: 15px 15px 15px 15px;
    border: 2px solid #9E3FFD;
  }
  @media (max-width:768px){
    height: 13%;
    }
`;
const LShade=styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background: linear-gradient(to left,rgba(4,8,15,0), #0a012a 60%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Scroll=styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  position: relative;
  left: 10px;
  font-size: 14px;
  height: 100%;
  overflow: hidden;
  width: 25%;
  color: #9E3FFD;
  .i-title-wrapper{
    position: relative;
    left: 10px;
    height: 100%;
    animation: move 10s ease-in-out infinite alternate;
  }
  .i-title-item{
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    color: #9E3FFD;
    display: flex;
    align-items: center;
  }
  @keyframes move{
      25%{
          transform: translateY(-50px);
      }
      50%{
          transform: translateY(-100px);
      }
      75%{
          transform: translateY(-150px);
      }
      100%{
          transform: translateY(-200px);
      }
  }
`;
const Para1=styled.div`
  padding: 15px;
  position: relative;
`;
const Para2=styled.div`
top: -10px;
padding: 15px;
position: relative;
`;
const Para3=styled.div`
top: -20px;
position: relative;
padding: 15px;
`; 
const BContent=styled.div`
  position: relative;
  height: 90%;
  width: auto;
  border-radius: 5px 5px 5px 150px; 
  font-size: 14px;
  color:#fff;
  display: flex;
  flex-direction: column;
  font-family: poppins;
  font-weight: 400;
  font-style: light;
  margin: 10px;
  @media (max-width:1200px){
      font-size: 12px;
  }
  @media (max-width:768px){
      font-size: 11px;
  }
`;
const Collection=styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 50%;
  align-items: center;
  right: 10px;
  position: relative;
  gap: 10px;
`;
const Circle=styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid #fff;
  &:hover{
    background-color: #fff;
  }
`;
const Mbox=styled.div`
  background-color: #0a012a;
  position: relative;
  height: 80%;
  margin-top: 10px;
  width: 95%;
  left: 5%;
  border-radius: 5px 5px 5px 120px;
  box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
  border: 2px solid #fff;
  &:hover{
    border: 2px solid #9E3FFD;
    .bar{
      border: 2px solid #9E3FFD;
      border-width:0px 0px 2px 0px;
    }
    .i-title-item{
      color:#fff;
    }
  }
`;
const Bar=styled.div`
  display: flex;
  width:100%;
  height: 10%;
  border:2px solid #fff;
  border-width:0px 0px 2px 0px;
`;
const Maincard=styled.div`
  height: 70%;
  width: 90%;
  top: 3%;
  position: relative;
  font-family: poppins;
  font-weight: 500;
  font-size: 30px;
`;
const Mtitle=styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  left: 5%;
  color: #9E3FFD;
  width: 30%;
`;
const Iletter=styled.div`
  font-family: 'Dancing Script';
  font-weight: 600;
  color: #fff;
  font-style: bold;
`;

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
      flex-direction: column;
  }
`;
const Right=styled.div`
  flex: 1;
  @media (max-width:768px){
      position: relative;
      flex: 0.5;
      border-radius: 0;
  }
`;
const Left=styled.div`
  flex: 1.5;
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
  justify-content:center;
  align-items: center;
  border-radius: 0px 0px 1000px 1000px;
  @media (max-width:768px){
    left: 0;
    width: 97%;
    border-width:2px 2px 2px 0px;
    border-radius: 0px 1000px 1000px 0px;
  }
`;
const Border=styled.div`
  position: relative;
  left: 10%;
  height: 80%;
  width:70%;
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
  &:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    border: 2px solid #0a012a;
    border-width:0px 3px 3px 3px;
  }
  @media (max-width:768px){
    left: 0;
    width: 90%;
    top: 25%;
    height: 70%;
    border-width:2px 2px 2px 0px;
    border-radius: 0px 1000px 1000px 0px;
    @keyframes outer-left{
      from {
        transform: translateX(200px);
      }
      to {
        transform: none;
      }
      }
      @keyframes inner-left {
        from {
          transform: translateX(-500px);
        }
        to {
          transform: none;
        }
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
    top: 10px;
    position: relative;
    inset: 0;
    display: block;
    width: 100%;
    border-radius: 0px 0px 1000px 1000px;
    @media (max-width:768px){
      left: 0;
      width: 100%;
      border-width:2px 2px 2px 0px;
      border-radius: 0px 1000px 1000px 0px;
    }
  }
  @media (max-width:768px){
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
  @media (max-width:768px){
      left: 0;
      border-width:2px 2px 2px 0px;
      border-radius: 0px 1000px 1000px 0px;
      background: linear-gradient(to left,rgba(4,8,15,0), #192133 90%);
    }
`;
const Title=styled.div`
  height: 350px;
  width: 40px;
  position: absolute;
  top: 0;
  left: 32.5%;
  font-size: 35px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-family: poppins;
  font-weight: 600;
  @media (max-width:768px){
    top: -110px;
    left: 15%;
    flex-direction: row;
    gap: 1px;
    }
`;
const Aboutword=styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  @media (max-width:768px){
      flex-direction: row;
    }
`;
const Me=styled.div`
  color: #0a012a;
  display: flex;
  flex-direction: column;
  @media (max-width:768px){
      top: -20px;
      position: relative;
      flex-direction: row;
      
    }
`;
const Svgname=styled.div`
  display: flex;
  height: 500px;
  width: 300px;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  opacity: 0;
  svg {
    position: relative;
    top: 0%;
    left: 70%;
    width: 600px;
    height: 80px;
    transform: translate(-50%, -50%);
  }

  .path {
    stroke-dashoffset: 0;
    stroke-dasharray: 100%;
  }

  .path:nth-child(10) {
    animation-delay: -2s;
  }
  .path:nth-child(9) {
    animation-delay: -1.75s;
  }
  .path:nth-child(8) {
    animation-delay: -1.5s;
  }
  .path:nth-child(7) {
    animation-delay: -1.5s;
  }
  .path:nth-child(6) {
    animation-delay: -1.25s;
  }
  .path:nth-child(5) {
    animation-delay: -1s;
  }
  .path:nth-child(4) {
    animation-delay: -0.75s;
  }
  .path:nth-child(3) {
    animation-delay: -1.25s;
  }
  .path:nth-child(2) {
    animation-delay: -0.25s;
  }

  @keyframes dash {
    0%,
    50% {
      stroke-dashoffset: 100%;
    }
    to {
      stroke-dashoffset: 0;
    }
}
;
&:hover{
  opacity: 0;
  .path{
    animation: dash 2.5s linear;
  }
}

`;
export default About