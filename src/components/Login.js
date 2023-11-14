import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { toggleAuth, toggleTempuser, isAuthenticated, setRoles } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/users/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const {roles} = response.data;
        
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', username);

        if (roles){
          setRoles(roles);
        }

        toggleAuth();
        toggleTempuser(username);
        navigate('/');
      }
    } catch (error) {
      alert("Incorrect username or password");
      console.error('Error during login:', error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    toggleAuth(); // Update the state to reflect the logout
    toggleTempuser('');
    window.location.reload();
  }

   return (
    <section className="sign-in">
      <div className="container2">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src="/images/signin.jpg" alt="signin" />
            </figure>
            <Link to="/signup" className="signup-image-link">
              Create an account
            </Link>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Login</h2>

            {isAuthenticated ? (
                <div>
                  <p>You are already logged in. Click the button below to log out.</p>
                  <button
                    className="btn btn-primary"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              ) : (
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
              )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Login;