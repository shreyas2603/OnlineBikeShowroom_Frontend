import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';



function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);


  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:4000/users/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        console.log('Registration successful!');
        // toggleTempuser(username);
         //toggleAuth();
         // You can navigate to another page here
         navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration errors and provide user feedback
      setRegistrationStatus('Registration failed. Please try again.');
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };
  
  return (
    <section className="signup">
      <div className="container2">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            {registrationStatus && (
              <div className={registrationStatus === 'Registration successful' ? 'success-message' : 'error-message'}>
                {registrationStatus}
              </div>
            )}
            <form>
              <div className="form-group">
                <label>
                <FontAwesomeIcon icon={faUser} />
                </label>
                <input
                  type="email"
                  name="name"
                  placeholder="Your Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                <FontAwesomeIcon icon={faEnvelope} />
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                <FontAwesomeIcon icon={faLock} />
                </label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group form-button">
                <button
                  type="button"
                  className="form-submit"
                  onClick={handleSignup}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src="/images/signup.jpg" alt="signup" />
            </figure>
            <a type="button" className="signup-image-link" onClick={handleLoginClick}>
              I am already a member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
