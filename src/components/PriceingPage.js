import React from 'react'
import './PriceingStyle.css'

import { useTranslation } from 'react-i18next';

function PriceingPage() {
  const { t } = useTranslation();
  return (
    <div className="priceing">
      <h1>{t('priceing.priceing-title')}</h1>
      <div className="price-container" data-aos='fade-up'>
        <table>
          <tr>
            <th colspan='2'>{t('priceing.priceing-entry')}</th>
            <th style={{ backgroundColor: '#01959a', color: '#fff' }}>{t('priceing.priceing-card')}</th>
          </tr>

          <tr>
            <td>{t('priceing.priceing-1')}</td>
            <td>{t('priceing.priceing-free')}</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>{t('priceing.priceing-free')}</td>
          </tr>

          <tr>
            <td>{t('priceing.priceing-2')}</td>
            <td>150,00 din</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>{t('priceing.priceing-free')}</td>
          </tr>

          <tr>
            <td>{t('priceing.priceing-3')}</td>
            <td>250,00 din</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>200,00 din</td>
          </tr>

          <tr>
            <td>{t('priceing.priceing-3')}</td>
            <td>4000,00 din</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>3000,00 din</td>
          </tr>
        </table>
        <div className="price-text">
          <p> <span>{t('priceing.priceing-card-1')} </span>{t('priceing.priceing-desc')}</p>
        </div>
      </div>
    </div>
  )
}
export default PriceingPage;
