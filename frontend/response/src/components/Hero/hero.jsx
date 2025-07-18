import React, { useState } from 'react';
import './hero.css';

const Hero = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="container">
      <div className="background-image">
        <div className="overlay">
          <header>
            <h1>Response Hub</h1>
            <p>
              We care for every journey. Report road incidents, prevent accidents, and keep vehicles safe for a stronger, safer Kenya together.
            </p>
          </header>
        </div>
      </div>

      {/* Chatbot Floating Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        💬
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Ask Me Anything</span>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chat-body">
            <p>Write here...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
