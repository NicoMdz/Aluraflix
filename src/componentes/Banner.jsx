import React from "react";
import styled from "styled-components";


const StyledBannerFondo = styled.div`
    background-image: url("img/BannerFondo.png");
`
const StyledContenido = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 30px 15px;
    width: 100%;
`
const TituloCategoria = styled.h2`
    background-color: #6BD1FF;
    color: #F5F5F5;
    display: flex;
    width: 296px;
    height: 92px;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 60px;
    font-weight: 400;
    text-align: center;
`
const SubtituloCategoria = styled.h3`
    font-family: Roboto;
    font-size: 46px;
    font-style: normal;
    font-weight: 400;
    color: #F5F5F5;
`
const DescripcionCategoria = styled.p`
    width: 661px;
    height: 110px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    color: #F5F5F5;
`
const InfoCategoría = styled.div`
    margin-left: 28px;
`
const Video = styled.iframe`
    border-radius: 4px;
    border: 4px solid var(----color-frontend, #6BD1FF);
    margin-right: 52px;
`
const Banner = () => {
    return (
        <StyledBannerFondo>
            <StyledContenido>
                <InfoCategoría>
                    <TituloCategoria>Front End</TituloCategoria>
                    <SubtituloCategoria>Challenge React</SubtituloCategoria>
                    <DescripcionCategoria>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</DescripcionCategoria>
                </InfoCategoría>
                <div>
                <Video width="646" height="333.582" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=bnuVFnPrHrrovyXG&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
                </div>
            </StyledContenido>
        </StyledBannerFondo>
    )
}

export default Banner