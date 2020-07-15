import React from 'react';
import { Route, Link, Switch } from "react-router-dom"
import Founder from '../components/layout/Body/Founder'
import ContactUs from '../components/layout/Body/ContactUs'
import Cards from '../components/layout/Body/Cards'
import Good from '../components/layout/Body/Good'
import OurServices from '../components/layout/Body/OurServices'
import Market from '../components/layout/Body/Market'
import AboutUs from '../components/layout/Body/AboutUs'
import Testimonials from '../components/layout/Body/Testimonials'
import Header from '../components/layout/Header/Header'

const HomePage = () => {
    return (
        <>
            <Header />
            <Cards />
            <OurServices />
            <AboutUs />
            <br />
            <Market />
            <br />
            <Testimonials />
            <br />
            <br />
            <br />
            <Founder />
            <br />
            <br />
            <br />
            <Good />
            <ContactUs />
        </>
    );
}

export default HomePage;
