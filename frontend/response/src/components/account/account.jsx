import React, { useState } from 'react';
import './account.css';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    garageName: '',
    insuranceName: '',
    speedLimiterName: '',
    garageRenewalDate: '',
    insuranceRenewalDate: '',
    speedLimiterRenewalDate: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
    alert("Account created and renewal dates saved!");
    // Future: POST to backend or store in database
  };

  return (
    <div className="account-container">
      <h2>Real-time Notification Alert </h2>
      <form onSubmit={handleSubmit} className="account-form">
        <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
        <input type="text" name="garageName" placeholder="Garage Name" required onChange={handleChange} />
        <input type="text" name="insuranceName" placeholder="Insurance Company" required onChange={handleChange} />
        <input type="text" name="speedLimiterName" placeholder="Speed Limiter Provider" required onChange={handleChange} />

        <label>Garage License Renewal Date</label>
        <input type="date" name="garageRenewalDate" required onChange={handleChange} />

        <label>Insurance Renewal Date</label>
        <input type="date" name="insuranceRenewalDate" required onChange={handleChange} />

        <label>Speed Limiter Renewal Date</label>
        <input type="date" name="speedLimiterRenewalDate" required onChange={handleChange} />

        <button type="submit">Update Information</button>
      </form>
    </div>
  );
};

export default AccountForm;
