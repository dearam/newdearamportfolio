import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import {  } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";
import { FiBriefcase} from "react-icons/fi";
import { RiPagesLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

import { BsPencilSquare } from "react-icons/bs";
import {NavLink} from "react-router-dom"
import '../App.css'
import { ReactComponent as Logo } from './squarelogo.svg'

function Navigationbar() {
   

  return (
        <NavMenu>
            <Logo className='logo'/>
            <Grid>
                <NavLink  to="/" className="normal" 
                    style={({isActive})=>{return {
                        color: isActive?'#9E3FFD':'',
                        background:isActive?"rgb(158, 63, 253,0.2)":"",
                        borderRadius:isActive?"10px":"",
                      
                    }}}>
                        <Content >
                            <BiHomeSmile className='home'/>
                            <Name>Home</Name>
                        </Content>
                    </NavLink>
                <NavLink  to="/about" className="normal" 
                    style={({isActive})=>{return {
                        color: isActive?'#9E3FFD':'',
                        background:isActive?"rgb(158, 63, 253,0.2)":"",
                        borderRadius:isActive?"10px":"",
                        
                    }}}>
                    <Content >
                        <RiPagesLine className='home'/>
                        <Name>About</Name>
                    </Content>
                </NavLink>
                <NavLink  to="/career" className="normal" 
                    style={({isActive})=>{return {
                        color: isActive?'#9E3FFD':'',
                        background:isActive?"rgb(158, 63, 253,0.2)":"",
                        borderRadius:isActive?"10px":"",
                    }}}>
                    <Content >
                        <BsPencilSquare className='home'/>
                        <Name>Career</Name>
                    </Content>
                </NavLink>
                <NavLink  to="/works" className="normal" 
                    style={({isActive})=>{return {
                        color: isActive?'#9E3FFD':'',
                        background:isActive?"rgb(158, 63, 253,0.2)":"",
                        borderRadius:isActive?"10px":"",
                    }}}>
                    <Content >
                        <FiBriefcase className='home'/>
                        <Name>Works</Name>
                    </Content>
                </NavLink>
                <NavLink  to="contact" className="normal" 
                    style={({isActive})=>{return {
                        color: isActive?'#9E3FFD':'',
                        background:isActive?"rgb(158, 63, 253,0.2)":"",
                        borderRadius:isActive?"10px":"",
                    }}}>
                    <Content>
                        <TiContacts className='home'/>
                        <Name>Contact</Name>
                    </Content>
                </NavLink>  
            </Grid>
            

        </NavMenu>
  )
}


const NavMenu=styled.div`
    height: 100%;
    position: fixed;
    display: flex;
    width: 5%;
    background-color: #0a012a;
    align-items: center;
    justify-content: center;
    @media (max-width:426px){
        background-color: rgba(10,1,42,0.5);
        position: fixed;
        bottom: 20px;
        width: 55%;
        left:24%;
        z-index: 5;
        height: 6%;
        justify-content:center;
        align-items:center;
        border:1px solid white;
        border-radius: 100px;
    }
    @media (max-width:768px) and (min-width:426px){
        background-color: rgba(10,1,42,0.5);
        position: fixed;
        bottom: 30px;
        width: 50%;
        left:30%;
        z-index: 5;
        justify-content:center;
        height: 6.5%;
        border:1px solid white;
        border-radius: 100px;
    }
    .logo{
        position: absolute;
        display: flex;
        top: 5%;
        height:40px;
        width:40px;
        @media (max-width:768px){
            display: none;
        }
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
            top: 8px;
            height: 30px;
            position: relative;
            width: 30px;
            @media (max-width:768px){
                top:5px;
                height:20px;
                width:20px;
            }
        }
    }
    .normal .active{
        color: blue;
    }
    @media (max-width:768px){
        left: 15%;
        display: grid;
        grid-gap: 0;
        grid-template-columns: repeat(5,minmax(40px,auto));
    }
    
`;
const Name=styled.div`
    position: fixed;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    bottom: 7px;
    left: 20%;
    transition: 0.5s;
    align-items: center;
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