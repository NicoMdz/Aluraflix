import React from "react";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Carousel from "../componentes/HomeCarousel/Carousel";
import CampoTexto from "../componentes/CampoTexto";


const Home = () => {
    return (
      <>  
        <Header />
        <Banner />
        <CampoTexto />
        <Carousel />
        <Carousel />
        <Footer />
      </>  
    )
}

export default Home