import React from 'react'
import styled from 'styled-components'
import {  } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";
import { FiBriefcase} from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

import { BsPencilSquare } from "react-icons/bs";
import {NavLink,Link} from "react-router-dom"
import '../App.css'

function Navigationbar() {

   // var btns=btnContainer.getElementsByClassName("list");
    // for(var i=0;i<btns.length;i++){
    //     btns[i].addEventListener('click',function(){
    //         var current=document.getElementsByClassName("active");
    //         current[0].className=current[0].className.replace("active");
    //         this.className+="active";
    //     })
    // }
  return (
        <NavMenu>
            <Bitemoji>
                <img src='./images/bitemo.png' alt="dearam"/>
            </Bitemoji>
            <Grid>
                <NavLink  to="/" className="normal" style={({isActive})=>{return {color: isActive?'blue':''}}}>
                        <Content >
                            <BiHomeSmile className='home'/>
                            <Name>Home</Name>
                        </Content>
                    </NavLink>
                <NavLink  to="/about" className="normal" style={({isActive})=>{return {color: isActive?'blue':''}}}>
                    <Content >
                        <RiPagesLine className='home'/>
                        <Name>About</Name>
                    </Content>
                </NavLink>
                <NavLink  to="/bio" className="normal" style={({isActive})=>{return {color: isActive?'blue':''}}}>
                    <Content >
                        <BsPencilSquare className='home'/>
                        <Name>Bio</Name>
                    </Content>
                </NavLink>
                <NavLink  to="/works" className="normal" style={({isActive})=>{return {color: isActive?'blue':''}}}>
                    <Content >
                        <FiBriefcase className='home'/>
                        <Name>Works</Name>
                    </Content>
                </NavLink>
                <NavLink  to="contact" className="normal" style={({isActive})=>{return {color: isActive?'blue':''}}}>
                    <Content>
                        <TiContacts className='home'/>
                        <Name>Contact</Name>
                    </Content>
                </NavLink>  
            </Grid>
        </NavMenu>
  )
}

const Bitemoji=styled.div`
    position: absolute;
    display: flex;
    top: 5%;
    img{
        position: relative;
        width: 40px;
        height: 40px;
    }
    @media (max-width:768px){
        display: none;
    }
`;

const NavMenu=styled.div`
    height: 100%;
    position: fixed;
    display: flex;
    width: 5%;
    background-color: #0a012a;
    align-items: center;
    justify-content: center;
    @media (max-width:768px){
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 2;
        height: 70px;
    }
`;

const Grid=styled.div`
    width: 100%;
    top: 25%;
    display: grid;
    height: 50%;
    fill: #ffffff;
    stroke: #ffffff;
    .selected {
        background-color: gold;
        color:Black ;
        font-weight:bold;
    }
    .normal{
        color: #ffffff;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        display: block;
        .home{
            height: 30px;
            position: relative;
            width: 30px;
        }
    }
    .normal .active{
        color: blue;
    }
    @media (max-width:768px){
        left: 15%;
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(6,minmax(60px,auto));
    }
    
`;
const Name=styled.div`
    position: fixed;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    left: 20%;
    transition: 0.5s;
    opacity: 0;
    
    @media (max-width:1000px){
        font-size: 10px;
    }
    @media (max-width:768px){
        display: none;
    }
`;
const Content=styled.div`
        width: 60px;
        height: 100%;
        justify-content: center;
        &:hover{
            opacity: 5;
            color: #9E3FFD;
        }
        @media (max-width:1200px){
            width: 55px;
        }
        @media (max-width:1100px){
            width: 45px;
        }
        @media (max-width:1000px){
            width: 35px;
        }
        @media (max-width:768px){
            width: 100%;
            height: 100%;
        }
`;

export default Navigationbar