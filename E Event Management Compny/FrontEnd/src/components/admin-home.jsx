import  { useState } from 'react';
import '../assets/home.css';
import Footer from './footer';
import AdminNavbar from './admin-navbar';

function AdminHomepage() {
  const [expertise, setExpertise] = useState({
    create: ["Define Objectives", "Creative Direction", "Strategy", "Budget Management", "Event Conceptualization"],
    design: ["Custom Builds", "Graphic Design", "Strategy", "Budget Management", "Event Conceptualization"],
    produce: ["Logistics", "Planning", "Audio Visual", "Lighting", "Venue Sourcing"]
  });

  const [overview, setOverview] = useState("Every event's success depends on the quality of experience that both the organizers and attendees perceive...");

  const handleEdit = (category, index, value) => {
    const updatedExpertise = { ...expertise };
    updatedExpertise[category][index] = value;
    setExpertise(updatedExpertise);
  };

  const handleOverviewEdit = (e) => {
    setOverview(e.target.value);
  };

  return (
    <div>
      <header className="navbarhome">
        <AdminNavbar />
      </header>
      <div>
        <section className="sectionhome">
          <h2 style={{textAlign: 'center'}}>Admin Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-item">
              <h3>Create</h3>
              <svg width="100%" height="10%">
                <line x1="1" y1="10" x2="200" y2="10" style={{stroke: "white", strokeWidth: 2}} />
              </svg>
              <ul className="list">
                {expertise.create.map((item, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleEdit("create", index, e.target.value)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="expertise-item">
              <h3>Design</h3>
              <svg width="100%" height="10%">
                <line x1="1" y1="10" x2="200" y2="10" style={{stroke: "white", strokeWidth: 2}} />
              </svg>
              <ul className="list">
                {expertise.design.map((item, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleEdit("design", index, e.target.value)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="expertise-item">
              <h3>Produce</h3>
              <svg width="100%" height="10%">
                <line x1="1" y1="10" x2="200" y2="10" style={{stroke: "white", strokeWidth: 2}} />
              </svg>
              <ul className="list">
                {expertise.produce.map((item, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleEdit("produce", index, e.target.value)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="sectionhome">
          <h2 style={{textAlign: 'center'}}>Admin Overview</h2>
          <div className="overview-item">
            <textarea
              value={overview}
              onChange={handleOverviewEdit}
              className="overview-textarea"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AdminHomepage;
