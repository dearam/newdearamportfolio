import {React,useState} from 'react'
import styled from 'styled-components';
import data from "../porjects.json";
import { FiExternalLink } from "react-icons/fi";


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
              <NTech>
              {node.technologies.map((Nnode)=>{
                return(
                  <div>{Nnode}</div>
                  )
              })}
              <FiExternalLink href='www.github.com'/>
              </NTech>
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
      left: 0;
      border-width:2px 2px 2px 0px;
      border-radius: 0px 1000px 1000px 0px;
      background: linear-gradient(to left,rgba(4,8,15,0), #192133 90%);
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
const NTech=styled.div`
  height: 20%;
  position: absolute;
  border-radius: 5px;
  display: flex;
  top: 80%;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const NContent=styled.div`
  position: relative;
  font-size: 14px;
  padding: 10px;
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
  letter-spacing: 2px;
  color: #fff;
  top: 80%;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  position: absolute;
  z-index: 1;
`;
const Nbox=styled.div`
  left: 2%;
  width: 80%;
  display: flex;
  color: #fff;
  border-radius:10px;
  border: 1.5px solid #333;
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
      font-size: 12px;
      justify-content: center;
      align-items: flex-end;
      height: 100%;
      width: 0;
      top: 0;
      left: -8%;
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
  grid-gap: 20px;
  width: 100%;
  margin: 4%;
  grid-template-columns: repeat(3,minmax(0,1fr));
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