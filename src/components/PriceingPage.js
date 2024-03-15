import React from 'react'
import './PriceingStyle.css'

function PriceingPage() {
  return (
    <div className="priceing">
      <h1>Árjegyzék</h1>
      <div className="price-container" data-aos='fade-up'>
        <table>
          <tr>
            <th colspan='2'>Napi Belépőjegy</th>
            <th style={{ backgroundColor: '#01959a', color: '#fff' }}>Bajsa kártyával</th>
          </tr>

          <tr>
            <td>0-7 éves korig</td>
            <td>ingyenes</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>ingyenes</td>
          </tr>

          <tr>
            <td>7-15 éves korig</td>
            <td>150,00 din</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>ingyenes</td>
          </tr>

          <tr>
            <td>15 éves kortól</td>
            <td>250,00 din</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>200,00 din</td>
          </tr>

          <tr>
            <td>Szezon jegy 2024</td>
            <td>4000,00 din</td>
            <td  style={{ backgroundColor: '#01959a', color: '#fff' }}>3000,00 din</td>
          </tr>
        </table>
        <div className="price-text">
          <p>A <span>Bajsai kártyát</span> a Bajsai lakosok hét éves kortól a Teleházban igényelhetik, érvényes igazolvány felmutatásával, a kártya igénylése ingyenes.</p>
        </div>
      </div>
    </div>
  )
}
export default PriceingPage;
