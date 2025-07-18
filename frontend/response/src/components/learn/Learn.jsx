import React from 'react';
import './learn.css';

const tutorials = [
  {
    id: 1,
    title: 'How to Report a Road Accident with Response Hub',
    description: 'Learn the step-by-step process to quickly report road accidents and alert nearby responders using the Response Hub platform.',
    duration: '5 min read',
  },
  {
    id: 2,
    title: 'Top 10 Causes of Road Accidents in Kenya',
    description: 'Understand the leading causes of traffic accidents on Kenyan roads and how to avoid them as a responsible driver or rider.',
    duration: '7 min read',
  },
  {
    id: 3,
    title: 'Vehicle Maintenance Checklist Before a Long Trip',
    description: 'This guide walks you through essential safety checks every driver should perform before starting a long-distance journey.',
    duration: '6 min read',
  },
  {
    id: 4,
    title: 'How to Use Response Hub for Vehicle Health Tracking',
    description: 'Explore how you can log your service records, track maintenance reminders, and stay on top of your car’s health with Response Hub.',
    duration: '4 min read',
  },
];

const Learn = () => {
  return (
    <div className="learn-container">
      <h1 className="learn-title">Learn</h1>
      <p className="learn-subtitle">
        Stay informed, stay safe. Explore helpful guides on road safety, vehicle care, and how to get the most out of Response Hub.
      </p>

      <div className="tutorial-grid">
        {tutorials.map(tutorial => (
          <div className="tutorial-card" key={tutorial.id}>
            <h2 className="tutorial-title">{tutorial.title}</h2>
            <p className="tutorial-description">{tutorial.description}</p>
            <span className="tutorial-duration">{tutorial.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
