import React, { useState, useEffect } from 'react';
import './NewsStyle.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
            <p>{item.pdate}</p>
            <Popup trigger={<button className='button'><i className="fa-regular fa-eye"></i></button>} modal>
              {close =>(
                <div className="modal">
                  <button className='close' onClick={close}><i className="fa-solid fa-xmark"></i></button>
                  <div className="header"><h4>{item.ptitle}</h4></div>
                  <div className="content">
                    <br />
                    <p>{item.ptexthu}</p>
                    <br />
                    <p>{item.ptextsr}</p>
                    <br />
                    <b>{item.pdate}</b>
                  </div>
                </div>
              )
              }
            </Popup>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;