import React from 'react';
import Header from "./Header";
import HeaderMain from "./HeaderMain";
import CarouselInfo from "./CarouselInfo";
import ExcursionsInfo from "./ExcursionsInfo";
import WhyUs from "./WhyUs";
import Services from "./Services";
import Formularz from "./Formularz";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <HeaderMain/>
            <CarouselInfo/>
            <ExcursionsInfo/>
            <WhyUs/>
            <Services/>
            <Formularz/>
            <Footer/>
        </>
    );
};

export default Home;