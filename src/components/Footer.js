import React from 'react'
import './FooterStyle.css'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>BazenBajsa</h1>
                <p>{t("footer.footer-desc")}</p>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100093803381540">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://www.instagram.com/bajsa.bazen?igsh=MXR4MGIwdGRzODE4aQ==">
                    <i className="fa-brands fa-square-instagram"></i>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>{t("footer.footer-first-box")}</h4>
                <a href="#destination">{t("footer.footer-first-box-1")}</a>
                <a href="/about">{t("footer.footer-first-box-2")}</a>
                <a href="/gallery">{t("footer.footer-first-box-3")}</a>
                <a href="/contact">{t("footer.footer-first-box-4")}</a>
            </div>

            <div>
                <h4>{t("footer.footer-second-box")}</h4>
                <a href="https://stcable.tv/hu">Sat-Trakt</a>
                <a href="http://www.bajsa.net/savet.html">{t("footer.footer-second-box-1")}</a>
                <a href="https://aquatop.rs/">AquaTop</a>
            </div>

            <div>
                <h4>{t("footer.footer-third-box")}</h4>
                <p>{t("footer.footer-third-box-1")}</p>
                <p>{t("footer.footer-third-box-2")}</p>
                <a href="tel:0612766605">{t("footer.footer-third-box-3")}</a>
                <a href="mailto:bazenbajsa@gmail.com">{t("footer.footer-third-box-4")}</a>

            </div>

            <div>
                <h4>{t("footer.footer-fourth-box")}</h4>
                <p>{t("footer.footer-fourth-box-1")}</p>
                <p>{t("footer.footer-fourth-box-2")}</p>
                <a href="mailto:danibrada29@gmail.com">{t("footer.footer-fourth-box-3")}</a>
            </div>
        </div>
        <div className="designed">© Copyright 2024. All Rights Reserved. </div>
    </div>
  )
}

export default Footer;