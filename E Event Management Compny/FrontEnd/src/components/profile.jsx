import { useState, useEffect } from 'react';
import '../assets/profile.css';
import profilepage from '../assets/images/profie.jpg'
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bio: '',
    avatarUrl: 'https://via.placeholder.com/150',
  });
  const [previousOrders, setPreviousOrders] = useState([]);

  useEffect(() => {
    // Fetch user profile data and previous orders upon component mount
    fetchProfile();
    fetchPreviousOrders();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('/api/profile'); // Adjust endpoint according to your backend
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchPreviousOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/event/all'); // Adjust endpoint according to your backend
      setPreviousOrders(response.data);
    } catch (error) {
      console.error('Error fetching previous orders:', error);
    }
  };

  // Rest of your component remains unchanged

  return (
    <div>
      <Navbar />
      <div className="profile">
        <div className="profile-header">
          <img src={profilepage} alt="Profile Avatar" className="avatar" />
          {/* Display user profile information */}
          <h2>{profile.username}</h2>
          <p>{profile.email}</p>
          <p>{profile.bio}</p>
        </div>
      </div>
      <div className='previous-orders'>
        <h2>Previous Orders</h2>
        {/* Map through previousOrders array to display each order */}
        {previousOrders.map((order, index) => (
          <p className='orders' key={index}>
            <strong>Order ID: {order.id}</strong> <br />
            <strong>Event: {order.ename}</strong> <br />
            <strong>Date: {order.edate}</strong> <br />
            <strong>Venue: {order.evenue}</strong> <br />
            <strong>Total: {order.ecost}</strong> <br />
          </p>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
