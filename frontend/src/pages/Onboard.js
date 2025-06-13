import React, { useState, useRef } from 'react';
import './Onboard.css';

const categories = {
  'Graphic Designer': {
    'Canva Designer': ['Social Media Posts', 'Event Posters', 'Certificate Designs', 'College Event Creatives'],
    'Photo Editor': ['Basic Retouching', 'Poster Design', 'Filter Adjustments', 'Background Removal']
  },
  'Video Editor': {
    'Video Editor': ['College Vlogs', 'Reels/TikToks', 'Lecture Editing', 'Basic Effects'],
    'Videographer': ['Event Coverage', 'Interview Recording', 'Short Film Shoots']
  },
  'Animator': {
    'Animator': ['2D College Animations', 'Whiteboard Explainers', 'Instagram Animations', 'Logo Animation']
  },
  'Content Creator': {
    'Content Creator': ['Instagram Content Strategy', 'YouTube Script Writing', 'Reel Concepts', 'Caption Writing'],
    'Voice Over Artist': ['YouTube Voiceovers', 'Podcast Narration', 'Ad Script Reading', 'Audiobook Recording']
  },
  'Marketing': {
    'Resume Builder': ['Basic Resume', 'Modern Template', 'LinkedIn Optimization', 'Cover Letter Writing'],
    'Presentation Creator': ['PowerPoint Design', 'Google Slides Setup', 'Pitch Decks', 'Infographics']
  },
  'Academic Support': {
    'Academic Writer': ['Research Papers', 'Assignments', 'Thesis Proofreading', 'Plagiarism Removal', 'Summarizing'],
    'Academic Assistant': ['Research Assistance', 'Study Material Summarization', 'Topic Explanations (1:1)', 'Notes Digitization', 'Past Paper Solving']
  }
};

const Onboard = () => {
  const [userType, setUserType] = useState('');
  const [category, setCategory] = useState('');
  const [role, setRole] = useState('');
  const [services, setServices] = useState([]);

  const categoryRef = useRef(null);
  const roleRef = useRef(null);
  const serviceRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceToggle = (service) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = () => {
    console.log({ userType, category, role, services });
    alert('Profile setup complete! Check console.');
  };

  return (
    <div className="onboard-container">
      <h2>Join as</h2>
      <div className='section'>
        <div href="#category-section" className="btn" onClick={(e) => {
            e.preventDefault();
          setUserType('freelancer');
          scrollToSection(categoryRef);
        }}>Freelancer</div>

        <div className="btn" onClick={() => alert('Redirect to Dashboard')}>Seller</div>
      </div>

      {userType === 'freelancer' && (
        <>
          <div className="section" ref={categoryRef} id="category-section">
            <h2>Select a Category</h2>
            <div>
              {Object.keys(categories).map((cat) => (
                <div href="#role-section" key={cat} className="btn" onClick={(e) => {
                  setCategory(cat);
                  setRole('');
                  e.preventDefault();
                  setServices([]);
                  scrollToSection(roleRef);
                }}>{cat}</div>
              ))}
            </div>
          </div>

          {category && (
            <div className="section" ref={roleRef} id="role-section">
              <h3>Choose a Role</h3>
              <div>
                {Object.keys(categories[category]).map((r) => (
                  <div href="#service-section" key={r} className="btn" onClick={(e) => {
                    setRole(r);
                    e.preventDefault();
                    setServices([]);
                    scrollToSection(serviceRef);
                  }}>{r}</div>
                ))}
              </div>
            </div>
          )}

          {role && (
            <div className="section" ref={serviceRef} id="service-section">
              <h3>Select Services</h3>
              <div>
                {categories[category][role].map((service) => (
                  <div
                    key={service}
                    className={`btn ${services.includes(service) ? 'selected' : ''}`}
                    onClick={() => handleServiceToggle(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          )}

          {services.length > 0 && (
            <button id="continue-btn" onClick={handleSubmit}>Continue</button>
          )}
        </>
      )}
    </div>
  );
};

export default Onboard;