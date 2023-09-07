import React from "react";
import styled from "styled-components"
import Logo from "../assets/LogoMain.png";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    padding: 20px 40px;
    border-bottom: 2px solid #2A7AE4;
`
const StyledButton = styled.button`
    font-size: 21px;
    font-weight: 600;
    background-color: black;
    color: #FFF;
    text-align: center;
    border-color: white;
    padding: 10px 15px;
    cursor: pointer;
`
 const StyledLogo = styled.img`
    width: 168.45px;
    height: 40px;
`

const Header = () => {
    return (
        <>
        
        <StyledHeader>
            <Link to="/"><a href="#"><StyledLogo src={Logo}  alt="Logo Aluraflix" /></a></Link>
            <Link to="/nuevo-video"><StyledButton>Nuevo Video</StyledButton></Link>
        </StyledHeader>
        </>
    )
}

export default Header