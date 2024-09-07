import React from 'react';
import './Home.css';
import backgroundVideo from '../assets/background-video.mp4';

const Home = () => (
  <div className="home">
    <section className="hero">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>TeleTrack</h1>
        <p>Integrated Telematics Solution for Efficient Trucking</p>
        <a href="/tracking" className="cta-button">Start Tracking</a>
      </div>
    </section>
    {/* Add more sections like Features, Testimonials, etc. */}
  </div>
);

export default Home;
