// components/Home.js
// import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'; // You'll need to create this component

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Link to="/event/1">
            <Card title="Conference" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/event/2">
            <Card title="Seminar" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/event/3">
            <Card title="Trade Show" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </Link>
        </div>
        {/* Add more cards here */}
      </div>
    </div>
  );
}

export default Home;
