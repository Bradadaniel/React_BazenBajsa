import React, {useState} from 'react'
import './AddNewsStyle.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNews() {

    const navigate = useNavigate();
    const[ptitle, setPtitle] = useState('');
    const[ptext, setPtext] = useState('');
    const[pdate, setPdate] = useState('');
    const[pfile, setPfile] = useState('');
    const[message, setMessage]= useState('');

    const uploadProduct = async()=> {
        const formData = new FormData();
        formData.append('ptitle', ptitle);
        formData.append('ptext', ptext);
        formData.append('pdate', pdate);
        formData.append('pfile', pfile);
        const response = await axios.post("http://localhost/Busniess/BajsaBazenSite/bajsabazen/api.php", formData, {
            headers: {'Content-Type':"multipart/form-data"},
        });

        if(response.data.success){
            setMessage(response.data.success);
            setTimeout(()=>{
                navigate('/');
            }, 2000)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await uploadProduct();
    }

  return (
    <div className="add-news">
        <h1>Esemény hozzáadása</h1>
        <p className='message'>{ message }</p>
        <form onSubmit={ handleSubmit}>
            <div className="box">
                <label className="box-title">Esemény címe </label>
                <input type="text" className='form-control' onChange={ (e) => setPtitle(e.target.value)}/>
            </div>

            <div className="box">
                <label className="box-title">Szöveg hozzáadása </label>
                <input type="text" className='form-control' onChange={ (e) => setPtext(e.target.value)}/>
            </div>

            <div className="box">
                <label className="box-title">Esemény dátuma </label>
                <input type="date" className='form-control' onChange={ (e) => setPdate(e.target.value)}/>
            </div>

            <div className="box">
                <label className="box-title">Borító hozzáadása </label>
                <input type="file" className='form-control' onChange={ (e) => setPfile(e.target.files[0])}/>
            </div>

            <div className="box">
                <button type="submit" className='submit-btn'>Közzététel</button>
            </div>
        </form>
    </div>
  )
}

export default AddNews;
