import React,{useRef} from 'react'
import styled from 'styled-components'
import './title.scss'

import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import { FiPhoneCall,FiMapPin } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiGithub,FiLinkedin,FiInstagram,FiTwitter} from "react-icons/fi";
import { FaWhatsapp,FaSpotify } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import {ReactComponent as Svgimage} from "./first logo.svg"




function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_imwq6eh', 'template_ppsdfr5', form.current, 'user_ANOg3A3wlIkYILyVv8CFA')
      .then((result) => {
        document.getElementById("form").style="display:none;";
        document.getElementById("form_submit").style="color:#00fdcf";
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        if(mediaQuery.matches){
          document.getElementById("main").style="height:40%;width:60%;transition: all 0.2s linear 0s;border:2px solid white;";
          document.getElementById("cover").style=`
            top:20%;
            width:63.7%;
            transition: all 0.2s linear 0s;
            `;
            document.getElementById("success_btn").style="font-size:10px;display:flex;justify-content:center;align-items:center;"
        }else{
          document.getElementById("main").style="height:50%;width:60%;transition: all 0.2s linear 0s;border:2px solid white;";
          document.getElementById("cover").style=`
            top:26.1%;
            width:63.7%;
            transition: all 0.2s linear 0s;
            `;
          document.getElementById("success_btn").style="display:flex;justify-content:center;align-items:center;";
        }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Contactpage>
      <Right>
        <Etitle>
            <Career className='career'>GET IN</Career>
            <Flow className='flow'>TOUCH</Flow>
        </Etitle>
        <PDetails>
          <PDetail>
            <a className='nodecoration' href="https://goo.gl/maps/Y3Wz4CftxznBJth6A">
              <a className="aicon" href="https://goo.gl/maps/Y3Wz4CftxznBJth6A">
                  <FiMapPin className='icon' ></FiMapPin>
                </a>
              <Detail>Madurai,India</Detail>
            </a>
          </PDetail>
          <PDetail>
            <a className='nodecoration' href="tel:+919360648114">
              <a className="aicon" href="tel:+919360648114">
                  <FiPhoneCall className='icon'></FiPhoneCall>
              </a>
              <Detail>+(91) 93606 48114</Detail>
            </a>
          </PDetail>
          <PDetail>
            <a className="nodecoration" href="mailto:ramprasath2709@gmail.com">
              <a className="aicon" href="mailto:ramprasath2709@gmail.com">
                <MdOutlineAlternateEmail className='icon'></MdOutlineAlternateEmail>
              </a>
            <Detail>ramprasath2709@gmail.com</Detail>
            </a>
          </PDetail>
        </PDetails>
        <Module>
          <div className="module__top">
            <div class="top__content">
              <RiDoubleQuotesL/>
            </div>
          </div>
          <div className="module__bottom">
            <div class="bottom__content">
              <RiDoubleQuotesR className='bottom-quote'/>
            </div>
          </div>
          <div className="module__contents">
            <Mcontent>
              <MMtitle>
                <span className='fspan'>F</span>
                <Mtitle>ollow me on <span>social media</span> and feel<span className='left'> ree to <span>email</span> me😉.</span></Mtitle>
              </MMtitle>
              <SIcons>
                <a href='https://github.com/dearam'>
                  <FiGithub className='github'/>
                </a>
                <a href='https://www.linkedin.com/in/dearam/'>
                  <FiLinkedin className='linkedin'/>
                </a>
                <a href='https://www.instagram.com/_dearam_3/'>
                  <FiInstagram className='instagram'/>
                </a>
                <a href='https://github.com/dearam'>
                  <FiTwitter className='twitter'/>
                </a>
                <a href='https://wa.me/9360648114'>
                  <FaWhatsapp className='whatsapp'/>
                </a>
                <a href='https://open.spotify.com/user/4wakhf37namczcgnoh2ym8g5g'>
                  <FaSpotify className='spotify'/>
                </a>
              </SIcons>
            </Mcontent>
          </div>
        </Module>
      </Right>
      <Left>
        <Mcover>
          <Acover id="cover">
          <svg width="430" height="221" viewBox="0 0 430 221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M206.487 216.556L5.33061 20.4178C-1.75809 13.5059 3.17876 1.4798 13.0792 1.54219L417.847 4.09285C427.748 4.15524 432.532 16.2426 425.357 23.0646L221.745 216.652C217.46 220.726 210.72 220.684 206.487 216.556Z" fill="#0A012A" stroke="white" stroke-width="2"/>
          </svg>
          <Atitle>
              Talk to Me
              <Svgimage className='logoimage'/>
          </Atitle>
          </Acover>
        </Mcover>
        <Mmain id='main'>
          <Mform>
            <form ref={form} onSubmit={sendEmail} id='form'>
              <input id="name" type="text" placeholder='Name' name='user_name' autoFocus required/>
              <input id="email" type="email" placeholder='Email' name="user_email" required/>
              <textarea id="message" placeholder='Hello ram i have a project to discuss with you.' name='message' required  ></textarea>
              <button type='submit' id='form_submit'>SEND</button>
            </form>
            <button className="successbtn" id='success_btn' disabled>Message Sent ✔</button>
          </Mform>
        </Mmain>
        {/* <div>
          <h1>Talk to Me</h1>
          <img src={mail}/>
        </div>
        <Envelope>
          <form ref={form} onSubmit={sendEmail} id='form'>
            <input placeholder='Name' name='user_name' type='text' required/>
            <input placeholder='email' name="user_email" type='email' required/>
            <textarea rows="5" placeholder='Hello ram i have a project to discuss with you.' name='message' required></textarea>
            <input className="button" type='submit' value="SEND" id='form_submit'/>
          </form>
        </Envelope> */}
      </Left>
      <Footer>
        <Designer>Designed and Developed with 🤍 by DEARAM</Designer>
        <Designer>2023 India</Designer>
      </Footer>
    </Contactpage>
  )
}


const Mform=styled.div`
  height:65%;
  width:80%;
  position:relative;
  top:35%;
  form{
    display:flex;
    flex-direction:column;
    gap:10px;
    height:100%;
    align-items:center;
    @media (max-width:768px) and (min-width:426px){
      @media (max-height:1280px) and (min-height:950px){
        top:20%;
        gap:15px;
      } 
    }
    @media (max-width:1280px) and (min-width:769px){
      
    }
  }
  input,textarea{
    border-radius:20px;
    outline:none;
    border:none;
    padding:10px;
    height:27px;
    width:93%;
    &:focus{
      border:2px solid #9E3FFD;
      color:#0a012a;
    }
    @media (max-width:768px) and (min-width:426px){
      @media (max-height:1280px) and (min-height:950px){
        height:35px;
      } 
    }
    @media (max-width:1280px) and (min-width:769px){
      
    }
  }
  textarea{
    height:60px;
    @media (max-width:768px) and (min-width:426px){
      @media (max-height:1280px) and (min-height:950px){
        height:70px;
      } 
    }
    @media (max-width:1280px) and (min-width:769px){
      
    }
  }
  button{
    border-radius:20px;
    outline:none;
    border:none;
    height:40px;
    width:40%;
    font-family:poppins;
    font-weight:500;
    font-size:16px;
    background-color:#0a012a;
    border:2px solid white;
    color:#9E3FFD;
    &:hover{
      background-color:#9E3FFD;
      border:2px solid #9E3FFD;
      color:white;
    }
    height:60px;
    @media (max-width:768px) and (min-width:426px){
      @media (max-height:1280px) and (min-height:950px){
        height:50px;
        font-size:20px;
      } 
    }
    @media (max-width:1280px) and (min-width:769px){
      
    }
  }
  .successbtn{
    display:none;
    border-radius:20px;
    outline:none;
    border:none;
    height:40px;
    position:relative;
    top:50%;
    left:25%;
    width:50%;
    font-family:poppins;
    font-weight:500;
    font-size:16px;
    background-color:#0a012a;
    border:2px solid white;
    color:#9E3FFD;
    &:hover{
      background-color:#9E3FFD;
      border:2px solid #9E3FFD;
      color:white;
    }
    @media (max-width:768px) and (min-width:426px){
      @media (max-height:1280px) and (min-height:950px){
        height:50px;
        font-size:20px;
      } 
    }
    @media (max-width:1280px) and (min-width:769px){
      
    }
  }

`;
const Atitle=styled.div`
  position:absolute;
  width:100%;
  display:flex;
  justify-content:center;
  top:35%;
  font-family:poppins;
  font-weight:700;
  font-size:22px;
  img{
    height:20px;
    width:100px;
  }
  .logoimage{
    position:absolute;
    height:250%;
    widht:250%;
  }

  @media (max-width:768px) and (min-width:426px){
    @media (max-height:1280px) and (min-height:950px){
      font-size:30px;
    } 
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
`;
const Acover=styled.div`
  display:flex;
  position:relative;
  top:18%;
  width:65%;
  z-index:2;
  left:18%;
  color:#9E3FFD;
  letter-spacing:2px;
  @media (max-width:320px){
    
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
    top:0%;
    left:18%;
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
    @media (max-height:1280px) and (min-height:950px){
      top:0%;
      width:55%;
      left:22%;
    } 
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    
  }
`;
const Mcover=styled.div`
  height:100%;
  width:50%;
  left:50%;
  position:absolute;
  @media (max-width:320px){
    
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
    width:100%;
    height:50%;
    left:0;
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
    width:100%;
    height:50%;
    left:0;
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    
  }
`;
const Mmain=styled.div`
  position:relative;
  background-color:#0a012a;
  height:65%;
  width:70%;
  padding:10px;
  top:10%;
  color:white;  
  border-radius:20px;
  display:flex;
  justify-content:center;
  gap:20px;
  &:hover{
    border:2px solid #9E3FFD;
    color:white;
  }
  @media (max-width:320px){
    
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
    top:0;
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
    @media (max-height:1280px) and (min-height:950px){
      top:0%;
    } 
  }
  @media (max-width:1280px) and (min-width:769px){
    
  }
  @media (max-width:1440px) and (min-width:1290px){
    
  }

`;

const Designer=styled.div`
  font-family:poppins;
  font-size:14px;
  color:#767776;
  @media (max-width:320px){
    font-size:10px;
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
    font-size:10px;
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
    
  }
`;
const Footer=styled.div`
  position:absolute;
  background-color:#0a012a;
  width:100%;
  height:50px;
  bottom:0;
  display:flex;
  justify-content:space-between;
  align-items:center;

  @media (max-width:320px){
    
    @media (max-height:690px){
      
    }
  }
  @media (max-width:426px) and (min-width:320px){
    height:80px;  
    font-size:
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
    
  }
`;
const SIcons=styled.div`
  display:flex;
  gap:20px;
  a{
    height:35px;
    width:35px;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    font-size:18px;
    overflow:hidden;
    position:relative;
    border:2px solid white;
    transition: all 0.2s linear 0s;

    &:hover{
      font-size:30px;
      color:#9E3FFD;
      border:none;
      .linkedin{
        color: #0A66C2;
      }
      .spotify{
        color:green;
      }
      .whatsapp{
        color:green;
      }
      .twitter{
        color:#1DA1F2;
      }
      .instagram{
        color:#E4405F;
      }
      .github{
        color: #6CC644;
      }
    }
    @media (max-width:320px){
      height:30px;
      width:30px;
    }
    @media (max-width:425px) and (min-width:320px){
      height:100%;
      width:80%;
      @media (max-height:620px){
        
      }
    }
    @media (max-width:768px) and (min-width:425px){
      
    }
  }
`;
const Mcontent=styled.div`
  height:80%;
  width:90%;
  padding:20px;
  display:flex;
  flex-direction:column;
  gap:40px;
`;
const MMtitle=styled.div`
  display:flex;
  gap:10px;
  .fspan{
    position:relative;
    top:-3px;
    letter-spacing:2px;
    font-weight:700;
    font-size:50px;
    font-family:mazius;
  }
`;
const Mtitle=styled.div`
  font-size:18px;
  span{
    letter-spacing:2px;
    font-size:18px;
    font-family:mazius;
  }
  .left{
    position:relative;
    left:-10px;
    color:white;
    font-family:poppins;
  }
`;
const PDetails=styled.div`
  position:relative;
  display:flex;
  font-size:20px;
  font-weight:500;
  flex-direction:column;
  top:20%;
  width:70%;
  left:10%;
  gap:30px;
  @media (max-width:320px){
    font-size:15px;
  }
  @media (max-width:425px) and (min-width:320px){
    font-size:15px;
    @media (max-height:620px){
      
    }
  }
  @media (max-width:768px) and (min-width:425px){
    @media (max-height:1280px) and (min-height:950px){
      width:80%;
    } 
  }
`;
const PDetail=styled.div`
  color:#0a012a;
  display:flex;
  align-items:center;
  gap:20px;
  font-weight:800;
  .nodecoration{
    display:flex;
    flex-direction:row;
    gap:20px;
    align-items:center;
    text-decoration:none;
    color:white;
  }
  .aicon{
    height:35px;
    width:35px;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    font-size:25px;
    overflow:hidden;
    position:relative;
    border:2px solid #0a012a;
    transition: all 0.2s linear 0s;
    .icon{
      color:white;
      z-index:3;
      display: inline-block;
      vertical-align: middle;
    }

    &:after {
      content: "";
      display: block;
      width: 90%;
      height: 90%;
      top: -110%;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      background-color: #0a012a;
      border-radius: 50%;
    }
  }

  &:hover {
    color:white;
    .nodecoration{
      color:#0a012a;
      .icon{
        color:white;
      }
      .aicon{
        &:after {
          top: 5%;
          transition: all 0.2s linear 0s;
        }
      }
    }
  }
  
  
}
`;
const Detail=styled.div`
`;
const Career=styled.div`
  position: relative;
  color: white;
`;
const Flow=styled.div`
  top:8px;
  left: -3.5px;
  color: #FFF;
  font-weight:none;
  letter-spacing:3px;
  font-size:35px;
  position: relative;
  font-family:mazius;
  @media (max-width:320px){
    
  }
  @media (max-width:425px) and (min-width:320px){
    font-size:25px;
    @media (max-height:620px){
      
    }
  }
  @media (max-width:768px) and (min-width:425px){
    left:22%;
    top:3%;
    @media (max-height:1280px) and (min-height:950px){
      left:0;
    } 
  }
`;
const Etitle=styled.div`
  font-size: 40px;
  font-weight: 900;
  top:10%;
  transform: translate(-50%,-50%);
  background-image: linear-gradient(#9E3FFD,#9E3FFD);
  background-size: 100% 5px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  transition: background-size .7s, background-position .5s ease-in-out;
  left: 15%;
  position: absolute;
  animation: text-clip 5s 0s cubic-bezier(0.5, 0, 0.1, 1) both;;
  display: flex;
  gap: 20px;
  
  @keyframes text-clip {
    from {
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
  &:hover{
    background-size: 100% 100%;
    background-position: 0% 100%;
    transition: background-position .7s, background-size .5s ease-in-out;
    .career{
      color:#fff;
    }
    .flow{
      color:#0a012a;
    }
  }
  @media (max-width:320px){
    top:10%;
    left:35%;
  }
  @media (max-width:425px) and (min-width:320px){
    top:10%;
    left:35%;
    font-size:30px;
    @media (max-height:620px){
      
    }
  }
  @media (max-width:768px) and (min-width:425px){
    left:22%;
    top:3%;
    @media (max-height:1280px) and (min-height:950px){
      top:10%;
    } 
  }
`;
const Module=styled.div`
  width: 400px;
  height: 200px;
  position: relative;
  margin: 20px;
  border-radius: 10px;
  padding: 12px;
  top:22%;
  left:10%;
  box-sizing: padding-box;
  position: relative;
  border-right: 2px solid white;
  border-left: 2px solid white;

  .module__contents {
    background: #0a012a;
    height: 100%;
    width: 100%;
    color:white;
    border-radius:10px;
  }
  .module__top {
    cursor: move;
    display: flex;
    flex-direction: row;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    
    &:before {
      border-radius: 10px 0 0 0;
      display: block;
      content: "";
      flex: 2 0 0;
      height: 1px;
      border-top: 2px solid white;
    }
    &:after {
      border-radius: 0 10px 0 0;
      display: block;
      content: "";
      flex: 10 0 0;
      height: 1px;
      border-top: 2px solid white;
    }
  }
  .module__bottom {
    cursor: move;
    display: flex;
    flex-direction: row;
    width: 100.3%;
    position: absolute;
    bottom: 0;
    left: 0;
    
    &:before {
      border-radius: 0 0 0 10px; /* Modified border radius */
      display: block;
      content: "";
      flex: 10 0 0;
      height: 30px;
      border-bottom: 2px solid white; /* Changed border direction */
    }
    &:after {
      border-radius: 0 0 10px 0; /* Modified border radius */
      display: block;
      content: "";
      flex: 2 0 0;
      height: 30px;
      border-bottom: 2px solid white; /* Changed border direction */
    }
  }

  .top__content {
    height: 36px;
    color: #0a012a;
    font: 20px Helvetica;
    font-weight: bold;
    overflow: hidden;
    flex: 0 0 30px;
    margin-top: -10px;
    text-align: center;
  }

  .bottom__content {
    color: #0a012a;
    font: 20px Helvetica;
    font-weight: bold;
    overflow: hidden;
    flex: 0 0 30px;
    margin-bottom: -20px; /* Changed margin property */
    text-align: center;
  }
  
  .bottom-quote{
    position:relative;
    top:20px;
  }

  &:hover{
    border-right: 3px solid #9E3FFD;
    border-left: 3px solid #9E3FFD;
    .top__content{
      color: white;
    }
    .bottom__content{
      color: white;
    }
    .module__top{
      cursor: move;
      display: flex;
      flex-direction: row;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      
      &:before {
        border-radius: 10px 0 0 0;
        display: block;
        content: "";
        flex: 2 0 0;
        height: 1px;
        border-top: 3px solid #9E3FFD;
      }
      &:after {
        border-radius: 0 10px 0 0;
        display: block;
        content: "";
        flex: 10 0 0;
        height: 1px;
        border-top: 3px solid #9E3FFD;
      }
    }
    .module__bottom{
      cursor: move;
      display: flex;
      flex-direction: row;
      width: 100.3%;
      position: absolute;
      bottom: 0;
      left: 0;
      
      &:before {
        border-radius: 0 0 0 10px; /* Modified border radius */
        display: block;
        content: "";
        flex: 10 0 0;
        height: 30px;
        border-bottom: 3px solid #9E3FFD; /* Changed border direction */
      }
      &:after {
        border-radius: 0 0 10px 0; /* Modified border radius */
        display: block;
        content: "";
        flex: 2 0 0;
        height: 30px;
        border-bottom: 3px solid #9E3FFD; /* Changed border direction */
      }
    }
  }

  @media (max-width:320px){
    
  }
  @media (max-width:425px) and (min-width:320px){
    width:80%;
    left:0;
    @media (max-height:620px){
      
    }
  }
  @media (max-width:768px) and (min-width:425px){
    @media (max-height:1280px) and (min-height:950px){
      width:500px;
      left:10%;
      height:230px;
    } 
  }
`;

const Right=styled.div`
  flex: 1;
  display:flex;
  justify-content:flex-start;
  flex-direction:column;
  font-family: poppins;
  @media (max-width:768px){
      position: relative;
      border-radius: 0;
  }
`;
const Left=styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:center;
  height: 100vh;
  width:100%;
  // border-radius: 1000px 0px 0px 1000px;
  justify-content: center;
  align-items: center;

  h1{
    position:absolute;
    top:10%;
    left:60%;
    color:#fff;
    writing-mode: vertical-lr;
    @media (max-width:320px){
      top:55%;
      left:70%;
    }
    @media (max-width:425px) and (min-width:320px){
      top:55%;
      left:70%;
      @media (max-height:620px){
        
      }
    }
    @media (max-width:768px) and (min-width:425px){
      
    }
  }

`;

const Contactpage=styled.div`
position: relative;
background-image: linear-gradient(#120440,#6C8EBF);
width: 95%;
left: 5%;
display: flex;
height:120vh;
img{
  position:absolute;
  top:10px;
  left:52%;
  height:48%;
  width:48%;
  @media (max-width:768px){
    height:80%;
    width:80%;
  }
}
@media (max-width:320px){
  flex-direction:column;
  background-image: linear-gradient(#120440,#6C8EBF);
  left: 0;
  height: 150vh;
  width: 100%;
  img{
    left:0;
    top:20%;
  }
  @media (max-height:690px){
    height: 170vh;
  }
}
@media (max-width:376px) and (min-width:320px){
  flex-direction:column;
  background-image: linear-gradient(#120440,#6C8EBF);
  left: 0;
  height: 125vh;
  width: 100%;
  @media (max-height:651px) and (min-height:500px){
    height: 170vh;
  }
  @media (max-height:700px) and (min-height:651px){
    height: 170vh;
  }
  @media (max-height:800px) and (min-height:700px){
    height: 170vh;
  }
  @media (max-height:900px) and (min-height:800px){
    height: 170vh;
  }
}
@media (max-width:426px) and (min-width:76px){
  flex-direction:column;
  background-image: linear-gradient(#120440,#6C8EBF);
  left: 0;
  height: 125vh;
  width: 100%;
  img{
    left:0;
    top:20%;
  }
  @media (max-height:651px) and (min-height:500px){
    height: 170vh;
  }
  @media (max-height:700px) and (min-height:651px){
    height: 170vh;
  }
  @media (max-height:800px) and (min-height:700px){
    height: 170vh;
  }
  @media (max-height:900px) and (min-height:800px){
    
  }
}
@media (max-width:768px) and (min-width:426px){
  flex-direction:column;
  background-image: linear-gradient(#120440,#6C8EBF);
  left: 0;
  width: 100%;
  img{
    left:0;
    top:20%;
  }
  @media (max-height:1280px) and (min-height:950px){
    
  } 
}
@media (max-width:1280px) and (min-width:769px){
  
}
@media (max-width:1440px) and (min-width:1290px){
  
}
`;

export default Contact