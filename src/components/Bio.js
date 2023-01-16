import React from 'react'
import styled from 'styled-components'

function Bio() {
  return (
    <Aboutpage>
      <EducationPage>
        <Etitle>
          <Career>CAREER</Career>
          <Flow>FLOW</Flow>
        </Etitle>
      </EducationPage>
      <Programmingskillspage>

      </Programmingskillspage>
      {/* <Line>
      <svg width="661" height="542" viewBox="0 0 661 542" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.2381 167H612.157C645.285 189.699 691.665 248.898 612.157 304.102L42.2381 295.022C12.6281 312.879 -28.8259 362.211 42.2381 416.689H612.157C646.751 433.032 695.183 478.975 612.157 532H42.2381" stroke="#0A012A" stroke-width="5"className='line'/>
      <path d="M521 533C521 537.473 517.589 541 513.5 541C509.411 541 506 537.473 506 533C506 528.527 509.411 525 513.5 525C517.589 525 521 528.527 521 533Z" fill="#D9D9D9" stroke="black" stroke-width="2" className='cup'/>
      <path d="M160 418C160 422.473 156.589 426 152.5 426C148.411 426 145 422.473 145 418C145 413.527 148.411 410 152.5 410C156.589 410 160 413.527 160 418Z" fill="#D9D9D9" stroke="black" stroke-width="2"/>
      <path d="M515 305C515 309.473 511.589 313 507.5 313C503.411 313 500 309.473 500 305C500 300.527 503.411 297 507.5 297C511.589 297 515 300.527 515 305Z" fill="#D9D9D9" stroke="black" stroke-width="2"/>
      <path d="M160 296C160 300.473 156.589 304 152.5 304C148.411 304 145 300.473 145 296C145 291.527 148.411 288 152.5 288C156.589 288 160 291.527 160 296Z" fill="#D9D9D9" stroke="black" stroke-width="2"/>
      <path d="M515 167C515 171.473 511.589 175 507.5 175C503.411 175 500 171.473 500 167C500 162.527 503.411 159 507.5 159C511.589 159 515 162.527 515 167Z" fill="#D9D9D9" stroke="black" stroke-width="2"/>
      <path d="M148.5 153L159.325 169.5H137.675L148.5 153Z" fill="#9E3FFD"/>
      <rect x="41" y="1" width="214" height="135" rx="19" fill="#0A012A" stroke="white" stroke-width="2" className='cup'/>
      </svg>
      </Line>  */}
    </Aboutpage>
  )
}

const Career=styled.div`
  position: relative;
  color: #fff;
`;
const Flow=styled.div`
  color: #0a012a;
  position: relative;
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
  }
`;
const EducationPage=styled.div`
  flex: 1;
`;
const Programmingskillspage=styled.div`
  flex: 1;
`;
const Line=styled.div`
  .line{
    stroke-dasharray: 2800;
    stroke-dashoffset: 2800;
    animation: line var(--total-time) ease-in-out;
    animation-fill-mode: forwards;
  }
  .cup{
    opacity: 0;
    animation: anim var(--coffe-time) linear var(--coffe-delay);
    animation-fill-mode: forwards;
  }
  .coffee{
    opacity: 0;
    animation: anim var(--cup-time) linear var(--cup-delay);
    animation-fill-mode: forwards;
  }
  @keyframes line {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes anim {
    to {
      opacity: 1;
    }
  }
`;
const Aboutpage=styled.div`
  position: absolute;
  height: 200vh;
  width: 95%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
export default Bio