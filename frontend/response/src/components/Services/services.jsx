import React from 'react'
import './services.css'

const services = () => {
  return (
    <div>
     <section className="services-section">
  <h2 className="services-title">Services</h2>
  <div className="services-list">
    <div class="service">
      <h3> Accident Risk Dashboard</h3>
      <p>Visualize high-risk areas on an interactive map using live accident and traffic data. Stay informed and drive smart.</p>
    </div>
    <div className="service">
      <h3> Report & Feedback</h3>
      <p>Report accidents, hazardous road conditions, or near-misses instantly. Your input helps shape safer infrastructure.</p>
    </div>
    <div className="service">
      <h3> Vehicle Health Monitor</h3>
      <p>Track your car’s condition with real-time diagnostics and get notified when it needs servicing or checkups.</p>
    </div>
    <div className="service">
      <h3> Smart Chatbot</h3>
      <p>Get immediate support and answers through our AI-powered assistant — from emergency steps to road rules.</p>
    </div>
    <div className="service">
      <h3> Learn & Educate</h3>
      <p>Access structured lessons on road safety, traffic regulations, and first-aid skills. Knowledge saves lives.</p>
    </div>
  </div>
</section>


    </div>
  )
}

export default services
