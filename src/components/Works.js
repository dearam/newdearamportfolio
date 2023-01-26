import {React,useState} from 'react'
import styled from 'styled-components';
import data from "../porjects.json";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub,FiLinkedin,FiInstagram,FiTwitter} from "react-icons/fi";

function Works() {
  return (
    <Workspage>
      <Mainmap>
      {data.map((node)=>{
        return(
          <div>
          <NMain>
          <Nbox className='nbox'>
          <Imgbox className='imgbox'>
            <Shade>
              
            </Shade>
            <img src={node.image}/>
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
    </Workspage>
  )
}

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
`;
const NInnerbox=styled.div`
  display:none
`;

const Shade=styled.div`
  height: 80%;
  width: 100%;
  position: absolute;
  top: 0;
  background: linear-gradient(to bottom,rgba(4,8,15,0), #0a012a 100%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width:768px){
    }
`;
const Imgbox=styled.div`
  height: 80%;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  img{
    z-index: 1;
    border-radius: 10px;
    object-fit: cover;
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
`;
const Sidetitle=styled.div`
  display: flex;
  font-family: mazius;
  font-style: italic;
  font-weight: 500;
  color: #fff;
  top: 80%;
  letter-spacing: 2px;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  position: absolute;
  z-index: 1;
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
        transform: scale(1.02);
        z-index: 2;
        border-color: rgba(249,249,249,0.8);
    }
  }
`;
const Mainmap=styled.div`
  display: grid;  
  grid-gap: 5px;
  width: 100%;
  height: 70%;
  margin: 4%;
  grid-template-columns: repeat(4,minmax(0,1fr));
  @media (max-width:768px){
    height: 50%;
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
`;
const Title=styled.div`
  position:relative;
  left:2%;
  top:1%;
`;
const My=styled.div``;
const Projects=styled.div``;
const Workspage=styled.div`
    position: relative;
    background-image: linear-gradient(#232140,#d7d6dc);
    width: 95%;
    height: 200vh;
    left: 5%;
    display: flex;
`;

export default Works