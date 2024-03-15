import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact1 from '../img/contact2.jpg';
import Footer from '../components/Footer';
import ContactPage from '../components/ContactPage';

function Contact() {
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        title = "Kapcsolat"
        text="Elérhetőségeink!"
        heroImg = {Contact1}
        />
        <ContactPage/>
        <Footer/>
    </>
  )
}

export default Contact;
