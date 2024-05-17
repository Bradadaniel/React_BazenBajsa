import React from 'react'
import './AboutUsStyle.css'

import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div className="about-container">
        <h1>{t('about.story')}</h1>
        <p>{t('about.story-text')}</p>    

        <h1>{t('about.about-us')}</h1>
        <p>{t('about.about-text')}</p>  

        <h1>{t('about.more')}</h1>
        <p>{t('about.more-text')}</p>    
    </div>
  )
}
export default AboutUs;
