import React from 'react'
import './FooterStyle.css'

function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>BazenBajsa</h1>
                <p>Töltse velünk a nyara egy részét!</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-square-instagram"></i>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>Linkek</h4>
                <a href="#destination">Miért mi?</a>
                <a href="/about">Rólunk</a>
                <a href="/gallery">Árjegyzék</a>
                <a href="/contact">Kapcsolat</a>
            </div>

            <div>
                <h4>Támogatóink</h4>
                <a href="https://stcable.tv/hu">Sat-Rakt</a>
                <a href="http://www.bajsa.net/savet.html">Bajsai Helyiközösség</a>
                <a href="https://aquatop.rs/">AquaTop</a>
            </div>

            <div>
                <h4>Nyitvatartás</h4>
                <p>Hetfő-Vasárnap</p>
                <p>10-19h</p>
                <a href="tel:0612766605">Telefon</a>
                <a href="mailto:bazenbajsa@gmail.com">Email cím</a>

            </div>

            <div>
                <h4>Designer</h4>
                <p>Daniel Brada</p>
                <p>Kapcsolat:</p>
                <a href="mailto:danibrada29@gmail.com">danibrada29@gmail.com</a>
            </div>
        </div>
        <div className="designed">© Copyright 2024. All Rights Reserved. </div>
    </div>
  )
}

export default Footer;