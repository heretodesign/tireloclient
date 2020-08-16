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
import Testimonials from '../components/layout/Body/Testimonials'
import Header from '../components/layout/Header/Header'
import Vision from '../components/layout/Body/Vision';
import Advantages from '../components/layout/Body/Advantages';

const HomePage = () => {
    return (
        <>
            <Header />
            <Cards />
            <OurServices />
            <Vision />
            <Advantages />
            <AboutUs />
            <br />
            <Market />
            <br />
            {/* <Testimonials /> */}
            <Markets />
            <br />
            <br />
            <br />
            <Founder />
            {/* <Founders /> */}
            <br />
            <br />
            <br />
            <Good />
            <ContactUs />
        </>
    );
}

export default HomePage;
