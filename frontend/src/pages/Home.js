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
          <a className="home-link" href="/">Home</a>
          <a className="home-link" href="/">Features</a>
          <a className="home-link" href="/">Contact</a>
        </nav>
        <div className="home-buttons">
          <button className="btn-signin">Sign In</button>
          <button className="btn-login">Login</button>
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
              Post tasks or earn money by helping peers with your talent
            </p>
            <div className="home-action-buttons">
              <button className="btn-post-task">Post a Task</button>
              <button className="btn-find-work">Find Work</button>
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
