import React from "react";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Slider from "../componentes/HomeCarousel/Slider"
import CampoTexto from "../componentes/CampoTexto";


const Home = (props) => {
    return (
      <>  
        <Header />
        <Banner />

        <Slider />
        <Slider />
        <Footer />
      </>  
    )
}

export default Home