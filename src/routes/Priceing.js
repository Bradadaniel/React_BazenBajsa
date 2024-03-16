import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner2 from '../img/banner2.jpeg';
import Footer from '../components/Footer';
import PriceingPage from '../components/PriceingPage';

function Gallery() {
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        title = "Árjegyzék"
        text="Tekintse meg az árainkat!"
        heroImg = {Banner2}
        />
        <PriceingPage/>
        <Footer/>
    </>
  )
}

export default Gallery;
