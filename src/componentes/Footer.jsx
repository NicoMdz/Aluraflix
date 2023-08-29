import React from "react";
import styled from "styled-components"
import Logo from "../assets/LogoMain.png";

const StyledFooter = styled.footer`
    background-color: black;  
    display: flex;
    justify-content: center;
    padding-top: 20px;
    height: 143px;
    margin-top: 40px;
`
const StyledLogo = styled.img`
    width: 250px;
    height: 60px;
`
 

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLogo src={Logo}/>
        </StyledFooter>
    )
}

export default Footer