import React from "react";
import styled from "styled-components";

const Video = styled.iframe`
    border-radius: 4px;
    border: 4px solid var(----color-frontend, #6BD1FF);
    margin-right: 52px;
`
const VideoCard = () => {
    return (
        <Video width="432" height="260.85" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=bnuVFnPrHrrovyXG&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
    )
};

export default VideoCard