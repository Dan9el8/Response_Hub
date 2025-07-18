import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">
            Response
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/learn">Learn</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            
          </ul>
        </div>
        <div className="right-nav">
          <Link to="/account" className="user-icon">
            <i className="bi bi-person-circle"></i>
            <h1 className="act">Kuboi</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;
