import React from "react";
import styled from "styled-components";


const StyledBannerFondo = styled.div`
    width: 100%;
    
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

const Banner = () => {
    return (
        <StyledBannerFondo>
            <StyledContenido>
                <div>
                    <h2>HOLA</h2>
                </div>
            </StyledContenido>
        </StyledBannerFondo>
    )
}

export default Banner