import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNews from '../../components/AddNews';
import NewsList from '../../components/NewsList';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);



  return (
    <>
    <h1>Admin</h1>
    <AddNews/>
    <NewsList/>
    </>
  )
}

export default Admin;
