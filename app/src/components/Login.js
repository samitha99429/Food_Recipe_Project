import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      console.log(response.data.token);
      window.location.reload('/homepage');
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="loginCard p-5 shadow">
          <div className="text-center mb-4">
            <h2 className="logoText">COOK</h2>
          </div>
          <h3 className="text-center mb-4">Sign in</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                className="form-control"
                type="email"
                value={email}
                placeholder='@gmail.com'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="********"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">SIGN IN</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Don't have an account? <a href="/register">Create an account</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
