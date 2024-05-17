import React, { useState, useEffect } from 'react';
import './NewsListStyle.css';

function NewsList() {
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

  const handleDelete = (id) => {
    fetch(`http://localhost/Busniess/BajsaBazenSite/bajsabazen/api.php/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setNews(news.filter(item => item.id !== id));
      } else {
        console.error(data.error);
      }
    })
    .catch(error => console.log(error));
  };

  return (
    <div className="newlist-container">
      <table className="new-list-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cím</th>
            <th>Magyar</th>
            <th>Szerb</th>
            <th>Dátum</th>
            <th>Kép</th>
            <th>Művelet</th>
          </tr>
        </thead>
        <tbody>
          {news.length > 0 ? (
            news.map((pdata, index) => (
              <tr key={index}>
                <td>{pdata.id}</td>
                <td>{pdata.ptitle}</td>
                <td>{pdata.ptexthu}</td>
                <td>{pdata.ptextsr}</td>
                <td>{pdata.pdate}</td>
                <td>
                  <img
                    src={`http://localhost/Busniess/BajsaBazenSite/bajsabazen/images/${pdata.pfile}`}
                    alt="img"
                    height={50}
                    width={90}
                  />
                </td>
                <td>
                <button 
                    type='button' 
                    className="btn-delete" 
                    onClick={() => handleDelete(pdata.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Nincs megjeleníthető adat</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default NewsList;
