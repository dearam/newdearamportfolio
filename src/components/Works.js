import {React} from 'react'
import styled from 'styled-components';
import data from "../porjects.json";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub} from "react-icons/fi";

function Works() {
  return (
    <Workspage>
      <Etitle>
          <Career className='career'>Works</Career>
          <Flow className='flow'>Done</Flow>
      </Etitle>
      <Mainmap>
      {data.map((node)=>{
        return(
          <div>
          <NMain>
          <Nbox className='nbox'>
          <Imgbox className='imgbox'>
            <Shade>
              
            </Shade>
            <img src={node.image} alt='nodeimage'/>
          </Imgbox>
          <Sidetitle className='sidetitle'>{node.fullname}</Sidetitle>
            <NInnerbox className='innerbox'>
              <Ntitle>{node.name}</Ntitle>
              <NContent>{node.description}</NContent>
              <Ubox>
              <NTech>
              {node.technologies.map((Nnode)=>{
                return(
                  <Nbtn>{Nnode}</Nbtn>
                  )
              })}
              
              </NTech>
              </Ubox>
              <LIcon href={node.Wlink}>
                <FiExternalLink className='icon'/>
              </LIcon>
              <GIcon href={node.Glink}>
                <FiGithub />
              </GIcon>
              </NInnerbox>
          </Nbox>
         </NMain>
         </div>
         
        )
      })}
      </Mainmap>
      <Footer>
        <Designer>Designed and Developed with 🤍 by DEARAM</Designer>
        <Designer>2023 India</Designer>
      </Footer>
    </Workspage>
  )
}

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
    
  }
  @media (max-width:425px) and (min-width:320px){
    height:80px;
    @media (max-height:620px){
      
    }
  }
  @media (max-width:768px) and (min-width:425px){
    
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
`;
const Etitle=styled.div`
  font-size: 40px;
  font-weight: 900;
  top:5%;
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
    top:3%;
    left:35%;
  }
  @media (max-width:425px) and (min-width:320px){
    top:3%;
    left:35%;
    @media (max-height:620px){
      
    }
  }
  @media (max-width:768px) and (min-width:425px){
    left:22%;
    top:3%;
  }
`;
const Ubox=styled.div`
  height: 20%;
  top: 80%;
  display: flex;
  width: 100%;
  position: absolute;
  width: 100%;
  justify-content: center;

`;
const NTech=styled.div`
  position: relative;
  border-radius: 5px;
  display: flex;
  height: 100%;
  position: absolute;
  width: 80%;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const LIcon=styled.a`
  position: absolute;
  align-items: flex-start;
  display: flex;
  top: 7%;
  left: 10px;
  color: #fff;
  &:hover{
    .icon{
      color: #9E3FFD;
    }
  }
`;
const GIcon=styled.a`
  position: absolute;
  align-items: flex-start;
  display: flex;
  top: 7%;
  right: 10px;
  color: #fff;
  &:hover{
      color: #9E3FFD;
  }
`;
const Nbtn=styled.div`
  font-size: 10px;
  background-color: #9E3FFD;
  padding: 3px;
  border-radius: 5px;
  font-family: poppins;
  font-weight: 400;
  @media (max-width:768px){
      font-size: 9px;
    }
`;
const NInnerbox=styled.div`
  display:none
`;

const Shade=styled.div`
  position: absolute;
  bottom:0;
  border-radius:10px;
  // background: linear-gradient(to bottom,rgba(4,8,15,0), #0a012a 100%);
  background-color:#0a012a;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width:768px){
    }
`;
const Imgbox=styled.div`
  height: 80%;
  width: 100%;
  background-color: #fff;
  border-radius:10px 10px 0px 0px;
  img{
    z-index: 1;
    object-fit: cover;
    border-radius:10px 10px 0px 0px;
    position: relative;
    inset: 0;
    height: 100%;
    width:100%;
  }
`;

const NContent=styled.div`
  position: relative;
  font-size: 12px;
  font-family: poppins;
  font-weight: 200;
  padding: 15px;
  top: 20%;
  @media (max-width:768px){
      font-size: 9px;
    }
`;
const Ntitle=styled.div`
  position: absolute;
  color: #9E3FFD;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  font-family: mazius;
  letter-spacing: 2px;
  justify-content: center;
  background-image:linear-gradient(#fff,#fff);
  background-position: 0% 100%;
  background-size: 100% 2px;
  background-repeat: no-repeat;
  @media (max-width:768px){
      font-size: 9px;
    }
`;
const Sidetitle=styled.div`
  display: flex;
  font-family: mazius;
  font-style: italic;
  font-weight: 500;
  color: #fff;
  top: 85%;
  letter-spacing: 2px;
  align-items: flex-end;
  justify-content: center;
  transition: all 0.2s linear 0s;
  width: 100%;
  font-size: 20px;
  position: absolute;
  z-index: 1;
  @media (max-width:768px){
        font-size: 14px;
  }
`;
const Nbox=styled.div`
  left: 2%;
  width: 87%;
  display: flex;
  color: #fff;
  border-radius:10px;
  border: 2px solid #222;
  background-color: #0a012a;
  position: relative;
`;

const NMain=styled.div`
  display: flex;
  height: 250px;
  justify-content: center;
  &:hover{
    .sidetitle{
      display: flex;
      font-family: poppins;
      font-style: italic;
      font-weight: 700;
      writing-mode: vertical-lr;
      transform: rotate(-180deg);
      position: absolute;
      color: #fff;
      letter-spacing: 4px;
      font-size: 12px;
      justify-content: center;
      align-items: flex-end;
      height: 100%;
      width: 0;
      top: 0;
      left: -9%;
      @media (max-width:768px){
        font-size: 10px;
        left: -13%;
      }
    }
    .imgbox{
      display: none;
    }
    .innerbox{
      display: flex;
    }
    .nbox{
      background-color: #0a012a;
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        transform: scale(1.05);
        z-index: 1;
        border-color: rgba(249,249,249,0.8);
    }
  }
  @media (max-width:426px){
    height:190px;
  }
`;
const Mainmap=styled.div`
  display: grid;  
  grid-gap: 5px;
  grid-row-gap: 10px;
  position: relative;
  top: 10%;
  width: 90%;
  height: 70%;
  margin: 4%;
  grid-template-columns: repeat(4,minmax(0,1fr));
    @media (max-width:320px){
      top:5%;
      height: 80%;
      grid-template-columns: repeat(2,minmax(0,1fr));
    }
    @media (max-width:425px) and (min-width:320px){
      top:5%;
      grid-row-gap: 0px;
      grid-gap: 5px;
      height: 80%;
      grid-template-columns: repeat(2,minmax(0,1fr));
      @media (max-height:620px){
        
      }
    }
    @media (max-width:900px) and (min-width:425px){
      height: 80%;
      top:5%;
      grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;

const Workspage=styled.div`
    position: relative;
    background-image: linear-gradient(#120440,#6C8EBF); 
    width: 95%;
    height: 200vh;
    left: 5%;
    display: flex;
    @media (max-width:768px){
      left: 0;
      height: 250vh;
      width: 100%;
  }
  // @media (max-height:700px){
  //     left: 0;
  //     height: 300vh;
  //     width: 100%;
  // }
`;

export default Works