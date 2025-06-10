import React from 'react';
import './Home.css';
import img from './components/img_landingpage.png'; 
function Home() {
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
        <div className="home-buttons">
          <div className="btn-signin">Sign In</div>
          <div className="btn-login">Login</div>
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
