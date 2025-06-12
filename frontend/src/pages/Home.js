import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import img from './components/img_landingpage.png';
import { jwtDecode } from 'jwt-decode';

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  let firstLetter = null;
  if (token) {
    const decoded = jwtDecode(token);
    firstLetter = decoded.name ? decoded.name.charAt(0).toUpperCase() : null;
  }

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleAvatarClick = () => {
    setShowPopover((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setShowPopover(false);
    navigate('/');
  };

  // Close popover if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    }
    if (showPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopover]);

  return (
    <div>
      <header className="home-header">
        <div className="home-logo">
          <span className="orange-text">H</span>
          <span className="gray-texst">ire</span>
          <span className="orange-text">On</span>
        </div>
        <nav className="home-nav">
          <div className="home-link" href="#home-hero">Home</div>
          <div className="home-link" href="#home-hero">Features</div>
          <div className="home-link" href="#home-hero">Contact</div>
        </nav>
        <div className="home-buttons" style={{ position: 'relative' }}>
          {!token ? (
            <>
              <div className="btn-signin" onClick={handleSignUp} style={{ cursor: 'pointer' }}>Sign In</div>
              <div className="btn-login" onClick={handleLogin} style={{ cursor: 'pointer' }}>Login</div>
            </>
          ) : (
            <>
              <div className="avatar" onClick={handleAvatarClick} style={{ cursor: 'pointer' }}>
                {firstLetter}
              </div>
              {showPopover && (
                <div className="popover" ref={popoverRef}>
                  <div className="popover-item" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </header>

      <main className="home-main">
        <section className="home-hero">
          <div className="home-text">
            <h1 className="home-heading">
              <span className="font-normal">Turn </span>
              <span className="highlight-text">Campus Skills</span>
              <br />
              <span className="font-normal">to </span>
              <span className="highlight-text">Earnings!</span>
            </h1>
            <p className="home-description">
              Post tasks or earn money by collaborating talents with your peer.
            </p>
            <div className="home-action-buttons">
              <div className="btn-post-task">Post a Task</div>
              <div className="btn-find-work">Find Work</div>
            </div>
          </div>
          <div className="home-image-container">
            <img src={img} alt="Collab Visual" className="home-image" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
