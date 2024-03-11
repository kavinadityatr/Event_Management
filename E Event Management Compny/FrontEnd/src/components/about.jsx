// import React from 'react';
import '../assets/about.css';
import profile from '../assets/images/profie.jpg'
import Navbar from "./navbar";
import Footer from '../components/footer';

const AboutPage = () => {
  return (
    <div>
    <Navbar />
    <div>
      <section className="company-description">
        <h2>About Our Company</h2>
        <p>Welcome, your premier partner in event management. We specialize in crafting unforgettable experiences for a wide range of events, from corporate functions to weddings and community gatherings. Our mission is to exceed expectations, turning your vision into reality with meticulous planning and attention to detail.</p>
      </section>
      
      <section className="team">
        <h2>Meet Our Team</h2>
        
        <div className="team-member">
          <img src={profile} alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>With over a decade of experience in event planning, John is our creative visionary. He specializes in conceptualizing unique themes and bringing them to life with his innovative ideas.</p>
        </div>
        
        <div className="team-member">
          <img src={profile} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Jane is our logistics expert, ensuring that every aspect of your event runs smoothly. Her meticulous attention to detail and organizational skills make her an invaluable member of our team.</p>
        </div>
        
        <div className="team-member">
          <img src={profile} alt="Team Member 3" />
          <h3>Michael Johnson</h3>
          <p>Michael is our client liaison, dedicated to providing exceptional service and support throughout the planning process. His friendly demeanor and commitment to customer satisfaction make him a trusted advisor for our clients.</p>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default AboutPage;
