import {React,useState} from 'react'
import styled from 'styled-components';


function Works() {
  return (
    <Workspage>
      <Title>
        <My>My</My>
        <Projects>Projects</Projects>
      </Title>
    </Workspage>
  )
}
const Title=styled.div``;
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