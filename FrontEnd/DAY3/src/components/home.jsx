import Navbar from "./navbar";
import { Link } from "react-router-dom";
import '../assets/home.css';

function Homepage(){
  return(
    <div>
    <header className="navbarhome">
      <Navbar />
    </header>
    <div>
    <section className="sectionhome">
                <h2>Our Expertise</h2>
                <div className="expertise-grid">
                    <div className="expertise-item">
                        <h3>Corporate Events</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="expertise-item">
                        <h3>Weddings</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="expertise-item">
                        <h3>Conferences</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    {/* Add more expertise items as needed */}
                </div>
            </section>
            <section>
                <h2>Complete Work Catalogue</h2>
                <p>Display a catalog of your company past events. You can include images, descriptions, and any other relevant information.</p>
                <Link to="/catalogue">View Catalogue</Link>
            </section>
        </div>
    </div>

    
  );
}
export default Homepage;