import React, {useState, useEffect} from 'react'
import './NewsListStyle.css'

function NewsList() {
  const[news, setNews] = useState([]);

  useEffect(()=>{
    const getNews=()=>{
      fetch("http://localhost/Busniess/BajsaBazenSite/bajsabazen/api.php")
      .then(res=>{return res.json()})
      .then(data=>{setNews(data)})
      .catch(error=>{console.log(error)});
    }
    getNews();
  }, []);


  return (
    <div className="newlist-container">
      <table className="new-list-table">
        <tr>
          <th>ID</th>
          <th>Cím</th>
          <th>Szöveg</th>
          <th>Dátum</th>
          <th>Kép</th>
          <th>Művelet</th>
        </tr>
        {news.length > 0 ? (
          news.map((pdata, index) => (
            <tr key={index}>
              <td>{pdata.id}</td>
              <td>{pdata.ptitle}</td>
              <td>{pdata.ptext}</td>
              <td>{pdata.pdate}</td>
              <td><img src={`http://localhost/Busniess/BajsaBazenSite/bajsabazen/images/${pdata.pfile}`} alt="img" height={50} width={90}/></td>
              <td>
                {/*<button type='button' className="btn-delete" onClick={handleDelete(pdata.id)}>Delete</button>*/}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Nincs megjeleníthető adat</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default NewsList;
