import React from "react";
import Header from "../componentes/Header";
import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Carousel from "../componentes/HomeCarousel/Carousel";


const Home = () => {
    return (
      <>  
        <Header />
        <Banner />
        <Carousel />
        <Carousel />
        <Footer />
      </>  
    )
}

export default Home