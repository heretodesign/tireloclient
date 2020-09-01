import React from 'react';
import { Route, Link, Switch } from "react-router-dom"
import Founder from '../components/layout/Body/Founder'
import Founders from '../components/layout/Body/Founders'
import ContactUs from '../components/layout/Body/ContactUs'
import Cards from '../components/layout/Body/Cards'
import Good from '../components/layout/Body/Good'
import OurServices from '../components/layout/Body/OurServices'
import Market from '../components/layout/Body/Market'
import Markets from '../components/layout/Body/Markets'
import AboutUs from '../components/layout/Body/AboutUs'
import Header from '../components/layout/Header/Header'
import Vision from '../components/layout/Body/Vision';
import Advantages from '../components/layout/Body/Advantages';
import Banner from '../components/layout/Body/Banner';
import Community from '../components/layout/Body/Community';

const HomePage = () => {
    return (
        <>
            <Header />
            <Cards />
            <Banner />
            <OurServices />
            <Vision />
            <Advantages />
            <AboutUs />
            <br />
            <Market />
            <br />
            <Markets />
            <Community />
            <Founder />
            {/* <Founders /> */}
            <br />
            <br />
            <br />
            {/* <Good /> */}
            <Good /> 
            <ContactUs />
        </>
    );
}

export default HomePage;
