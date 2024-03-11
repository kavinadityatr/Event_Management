import { useState, useEffect } from 'react';
import '../assets/enquiry.css'; // Importing the CSS file
import Navbar from './navbar';
import Footer from './footer';
import enquiry from "../assets/images/enquiry.png";
import axios from 'axios';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch all events from backend upon component mount
    fetchEvents();
  }, []);
  const token=localStorage.getItem('token');
  console.log(token);
  axios.defaults.headers.common['Authorization']=`Bearer ${token}`;

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/event/all');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(venue,cost,date,name);

    try {
      // Send form data to backend to create new event
      await axios.post('http://localhost:8080/api/event/post', {
        ename: name,
        evenue: venue,
        edate: date,
        ecost: cost
      });

      // Reset form fields and set payment success
      setName('');
      setVenue('');
      setDate('');
      setCost('');
      setPaymentSuccess(true);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <header className="navbarhome">
        <Navbar />
      </header>
    
      <div className="container"> 
        <div className="image-container">
          <img src={enquiry} alt="Image" />
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Event:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Venue:</label>
            <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Booking Amount:</label>
            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {paymentSuccess && <div>Payment successful! Thank you.</div>}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentForm;
