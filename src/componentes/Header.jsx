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
`

const Header = () => {
    return (
        <StyledHeader>
            <img src={Logo} alt="Logo Aluraflix" />
            <StyledButton>Nuevo Video</StyledButton>
        </StyledHeader>
    )
}

export default Header