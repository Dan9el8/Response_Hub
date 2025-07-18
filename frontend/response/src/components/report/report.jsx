import React, { useState } from 'react';
import './report.css';

const Report = () => {
  const [formData, setFormData] = useState({
    location: '',
    time: '',
    image: null,
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted incident report:', formData);
    alert('Incident reported successfully!');
    // TODO: Send formData to backend
  };

  return (
    <div className="report-container">
      <h1>Report an Incident</h1>
      <form className="report-form" onSubmit={handleSubmit}>

        <label>Incident Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g. Thika Road, Nairobi"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label>Time of Incident</label>
        <input
          type="datetime-local"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label>Upload Image or Video</label>
        <input
          type="file"
          name="image"
          accept="image/*,video/*"
          onChange={handleChange}
        />

        <label>Your Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="e.g. Daniel Kuboi"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="e.g. you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="e.g. +254712345678"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default Report;
