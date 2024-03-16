import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner3 from '../img/banner3.jpg';
import Destination from '../components/Destination';
import News from '../components/News';
import Footer from '../components/Footer';

import { useTranslation } from 'react-i18next';


function Home() {
  const { t } = useTranslation();
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero"
        title = "BazenBajsa"
        heroImg = {Banner3}
        text={t('hero-home.text')}
        buttonText={t('hero-home.button')}
        url="#news"
        btnClass="show"
        />
        <Destination/>
        <News/>
        <Footer/>
    </>
  )
}

export default Home;
