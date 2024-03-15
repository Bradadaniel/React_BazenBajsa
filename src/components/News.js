import React, { useState, useEffect } from 'react';
import './NewsStyle.css';

function News() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const getNews = () => {
      fetch("http://localhost/Busniess/BajsaBazenSite/bajsabazen/api.php")
        .then(res => res.json())
        .then(data => setNews(data))
        .catch(error => console.log(error));
    };

    getNews();
  }, []);

  return (
    <div className="news" id='news' data-aos='fade-right'>
      <h1>Hírek</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, omnis.</p>
      <div className="news-card">
        {news.map((item, index) => (
          <div className="n-card" key={index}>
            <div className="n-image">
              <img src={`http://localhost/Busniess/BajsaBazenSite/bajsabazen/images/${item.pfile}`} alt="news-img" />
            </div>
            <h4>{item.ptitle}</h4>
            <p>{item.ptext}</p>
            <p>{item.pdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;