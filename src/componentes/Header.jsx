import React from "react";
import styled from "styled-components"
import Logo from "../assets/LogoMain.png";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: black;
    align-items: center;
    padding: 20px 40px;
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
        <StyledHeader>
            <a href="#"><StyledLogo src={Logo}  alt="Logo Aluraflix" /></a>
            <StyledButton>Nuevo Video</StyledButton>
        </StyledHeader>
    )
}

export default Header