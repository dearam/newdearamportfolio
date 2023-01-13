import React from 'react'
import styled from 'styled-components'
import './title.scss'

function Contact() {
  return (
    <Contactpage>
      <div class="title">
        <div class="title-inner">
          <div class="cafe">
            <div class="cafe-inner">
              <div>A</div>
              <div>B</div>
              <div>O</div>
              <div>U</div>
              <div>T</div>
              <div>M</div>
              <div>E</div>
              </div>
          </div>
          <div class="mozart">
            <div class="mozart-inner">Artistes</div>
          </div>
        </div>
      </div>
    </Contactpage>
  )
}

const Contactpage=styled.div`
  position: absolute;
  width: 95%;
  left: 5%;
`;

export default Contact