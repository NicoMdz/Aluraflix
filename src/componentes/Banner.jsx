import React from "react";
import BannerMain from "../assets/BannerMain.png"
import styled from "styled-components"

const StyledBanner = styled.img`
    width: 100%;
`


const Banner = () => {
    return (
        <StyledBanner src={BannerMain} alt="Banner" />
    )
}

export default Banner