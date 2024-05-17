import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

   const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost/Busniess/BajsaBazenSite/bajsabazen/ApiBazenBajsa/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const text = await response.text(); // Get the raw response text
        try {
            const data = JSON.parse(text); // Attempt to parse JSON
            if (data.status === 'success') {
                localStorage.setItem('auth', 'true');
                navigate('/admin');
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Invalid User');
            console.error('Response is not valid JSON:', text);
        }
    } catch (err) {
        setError('Network error');
        console.error('Fetch error:', err);
    }
};

  return (
    <div className="login">
        {error && <p style={{color: 'red'}}>{error}</p>}
        <form onSubmit={handleLogin}>
            <div>
                <label>Username:</label><br />
                <input type="text" 
                value={username}
                onChange={(e)=> setUsername(e.target.value)}/>
            </div>

            <div>
                <label>Password: </label><br />
                <input type="password" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login;