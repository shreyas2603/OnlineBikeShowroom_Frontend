import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { toggleAuth, toggleTempuser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/users/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful!');
        toggleAuth();
        toggleTempuser(username);
        navigate('/payment');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login errors and provide user feedback, e.g., display an error message
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <section className="sign-in">
      <div className="container2">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src="/images/signin.jpg" alt="signin" />
            </figure>
            <a  type="button" className="signup-image-link" onClick={handleSignupClick}>
              Create an account
            </a>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Login</h2>
            <form method="POST" className="register-form" id="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label>
                <FontAwesomeIcon icon={faUser} />
                </label>
                <input
                  type="name"
                  name="your_name"
                  id="your_name"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                <FontAwesomeIcon icon={faLock} />
                </label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
