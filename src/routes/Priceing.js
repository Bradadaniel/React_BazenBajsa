import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner2 from '../img/banner2.jpeg';
import Footer from '../components/Footer';
import PriceingPage from '../components/PriceingPage';

import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        title = {t('hero-priceing.title')}
        text={t('hero-priceing.text')}
        heroImg = {Banner2}
        />
        <PriceingPage/>
        <Footer/>
    </>
  )
}

export default Gallery;
