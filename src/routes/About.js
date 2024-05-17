import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner3 from '../img/banner3.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        title = {t('hero-about.text')}
        text={t('hero-about.text')}
        heroImg = {Banner3}
        />
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default About;
