import "./style.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import Home from "./routes/Home";
import About from "./routes/About";
import Priceing from "./routes/Priceing";
import Contact from "./routes/Contact";
import Admin from "./routes/Admin/Admin";
import './i18n';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Login from "./routes/Admin/Login";

function App() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/priceing" element={<Priceing/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
