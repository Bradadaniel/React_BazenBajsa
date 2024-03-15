import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner3 from '../img/banner3.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        title = "Rólunk"
        text="Tudjon meg többet a történetünkröl!"
        heroImg = {Banner3}
        />
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default About;
