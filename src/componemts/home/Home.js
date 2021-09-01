import React from 'react';
import Header from "./Header";
import HeaderNav from "./HeaderNav";
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
            <HeaderNav/>
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