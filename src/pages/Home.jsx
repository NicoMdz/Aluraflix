import React from "react";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Carousel from "../componentes/HomeCarousel/Carousel";
import RegistroVideo from "../componentes/Registro/RegistroVideo/RegistroVideo";


const Home = () => {
    return (
      <>  
        <Header />
        <Banner />
        <RegistroVideo />
        <Carousel />
        <Carousel />
        <Footer />
      </>  
    )
}

export default Home