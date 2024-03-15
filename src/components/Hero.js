import React from 'react'
import './HeroStyle.css';

function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.heroImg} alt="HeroImg" />
      <div className="hero-text">
        <h1 data-aos='fade-up'>{props.title}</h1>
        <p data-aos='fade-up'>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div>
    </div>
  )
}

export default Hero;
