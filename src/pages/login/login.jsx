import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Zety from '../../images/cv-format/zety-logo.svg';
import { FaGithub, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^[A-Za-z\d@$!%*?&]{6,16}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be between 6 to 16 characters.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      navigate('/home');
    }
  };

  return (
    <div className="login-main">
      <div className="login-content">
        <div className="login-top">
          <div className="login-logo">
            <div className="login-logo-img">
              <img src={Zety} alt="" />
            </div>
            <p>Sign-in to Your Account</p>
          </div>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error-message">{emailError}</p>}

              <input
                type="password"
                placeholder="Password (Must be between 6 to 16 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="error-message">{passwordError}</p>}

              <button className="login-btn" type="submit">
                SIGN IN
              </button>
              <p className="login-term">
                By clicking on Sign In you also agree to our{' '}
                <a href="" className="blue">
                  Terms of Use
                </a>{' '}
                and <br />
                <a href="" className="blue">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>

          <div className="login-through">
            <div className="through">
              <p className="through-p">Sign in with</p>
              <button className="login-apple">
                <FaGithub size={20} />
                Sign in with Github
              </button>
            </div>
            <div className="through">
              <button className="login-fb">
                <FaFacebookF size={20} />
                Facebook
              </button>
              <button className="login-g">
                <FaGoogle size={20} />
                Google
              </button>
            </div>
          </div>
        </div>
        <div className="login-bottom">
          <div className="gray-login">
            <a className="blue">Forgot your password?</a>
            <p>
              Don't have an account?{' '}
              <NavLink to="/signup" className="blue">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
