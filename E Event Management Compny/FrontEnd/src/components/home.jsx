import Navbar from "./navbar";
// import { Link } from "react-router-dom";
import '../assets/home.css';
import Footer from '../components/footer';

function Homepage(){
  return(
    <div>
    <header className="navbarhome">
      <Navbar />
    </header>
    <div>
    <section className="sectionhome">
                <h2 style={{textAlign: 'center'}}>Our Expertise</h2>
                <div className="expertise-grid">
                    <div className="expertise-item">
                        <h3>Create</h3>
                        <svg width="100%" height="10%">
                        <line x1="1" y1="10" x2="200" y2="10" style={{stroke: "white", strokeWidth: 2}} />
                        </svg>
                        <ul className="list">
                            <li>Define Objectives</li>
                            <li>Creative Direction</li>
                            <li>Strategy</li>
                            <li>Budget Management</li>
                            <li>Event Conceptualization</li>
                        </ul>
                    </div>
                    <div className="expertise-item">
                        <h3>Design</h3>
                        <svg width="100%" height="10%">
                        <line x1="1" y1="10" x2="200" y2="10" style={{stroke: "white", strokeWidth: 2}} />
                        </svg>
                        <ul className="list">
                            <li>Custom Builds</li>
                            <li>Graphic Design</li>
                            <li>Strategy</li>
                            <li>Budget Management</li>
                            <li>Event Conceptualization</li>
                        </ul>
                    </div>
                    <div className="expertise-item">
                        <h3>Produce</h3>
                        <svg width="100%" height="10%">
                        <line x1="1" y1="10" x2="200" y2="10" style={{stroke: "white", strokeWidth: 2}} />
                        </svg>
                        <ul className="list">
                            <li>Logistics</li>
                            <li>Planning</li>
                            <li>Audio Visual</li>
                            <li>Lighting</li>
                            <li>Venue Sourcing</li>
                        </ul>
                    </div>
                    {/* Add more expertise items as needed */}
                </div>
            </section>
            <section>
                <h2 style={{textAlign: 'center'}}>Incredible Experience, Exceptional Results</h2>
                <p style={{textAlign: 'center'}}>Every events success depends on the quality of experience that both the organizers and attendees perceive and in our team at Maze Events specialize providing such remarkable event. As one of the top event management companies in Chennai and Bangalore regions, we provide comprehensible event planning and management solutions for all your needs.</p>
                <p style={{textAlign: 'center'}}>Whether its a family, corporate, exhibition, or conference, no matter the size of the event, We plan and organizes precisely and accordingly. As the best management in Chennai, we are delighted to have a track record of 100+ happy clients nationwide. Our event management company in Chennai was created by pairing together our passion for relationships and events. Our event organizers in Chennai and Bangalore regions bring a fresh, pleasant, and unique approach to the event management industry.</p>
            </section>
        </div>
    <Footer />
    </div>
    

    
  );
}
export default Homepage;