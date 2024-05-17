import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact1 from '../img/contact2.jpg';
import Footer from '../components/Footer';
import ContactPage from '../components/ContactPage';

import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        title = {t('hero-contact.title')}
        text={t('hero-contact.text')}
        heroImg = {Contact1}
        />
        <ContactPage/>
        <Footer/>
    </>
  )
}

export default Contact;
