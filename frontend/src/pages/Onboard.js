import React, { useState, useRef } from 'react';
import './Onboard.css';
import freelancer from './components/icon_freelancer.png'
import seller from './components/icon_seller.png'

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
            <div className='section-head-main'>Join as</div>
            <div className='section-main'>
                <div className='section-content'>
                    <div href="#category-section" className="btn-card" onClick={(e) => {
                        e.preventDefault();
                        setUserType('freelancer');
                        scrollToSection(categoryRef);
                    }}><img src={freelancer} className='card-icon' />Freelancer</div>


                    <div className="btn-card" onClick={() => alert('Redirect to Dashboard')}><img src={seller} className='card-icon' />Seller</div>
                </div>
            </div>

            {userType === 'freelancer' && (
                <>
                    <div className='section-head'>Select a Category</div>
                    <div className="section" ref={categoryRef} id="category-section">


                        {Object.keys(categories).map((cat) => (
                            <div
                                href="#role-section"
                                key={cat}
                                className={`btn ${category === cat ? 'selected' : ''}`}
                                onClick={(e) => {
                                    setCategory(cat);
                                    setRole('');
                                    e.preventDefault();
                                    setServices([]);
                                    scrollToSection(roleRef);
                                }}
                            >
                                {cat}
                            </div>
                        ))}

                    </div>

                    {category && (
                        <div className="container" ref={roleRef} id="role-section">
                            <div className='section-head'>Choose a Role</div>
                            <div className='section'>
                                {Object.keys(categories[category]).map((r) => (
                                    <div
                                        href="#service-section"
                                        key={r}
                                        className={`btn ${role === r ? 'selected' : ''}`}
                                        onClick={(e) => {
                                            setRole(r);
                                            e.preventDefault();
                                            setServices([]);
                                            scrollToSection(serviceRef);
                                        }}
                                    >
                                        {r}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {role && (
                        <div className="container" ref={serviceRef} id="service-section">
                            <div className='section-head'>Select Services</div>
                            <div className='section'>
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