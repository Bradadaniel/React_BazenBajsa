import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Priceing from '../img/priceing.jpg';
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
        heroImg = {Priceing}
        />
        <PriceingPage/>
        <Footer/>
    </>
  )
}

export default Gallery;
