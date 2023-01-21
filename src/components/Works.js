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
         <NMain>
          <Sidetitle>{node.fullname}</Sidetitle>
          <Nbox>
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
          </Nbox>
         </NMain>
        )
      })}
      </Mainmap>
    </Workspage>
  )
}
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
  font-family: poppins;
  font-style: italic;
  font-weight: 700;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  position: relative;
  justify-content: center;
  flex-direction: row;
  left: 5%;
`;
const Nbox=styled.div`
  display: flex;
  width: 80%;
  color: #fff;
  border-radius:10px;
  border: 1.5px solid #333;
  background-color: #0a012a;
  position: relative;
  left: 5%;
  
`;
const NMain=styled.div`
  display: flex;
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