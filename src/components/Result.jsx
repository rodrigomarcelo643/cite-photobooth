import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import './R.css';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const imageUrl = state?.imageUrl;

  if (!imageUrl) {
    return <div>Error: No image URL provided.</div>;
  }

  return (
    <div className="result-container">
      <div className="left-panel">
        <img src={imageUrl} alt="Photostrip" className="photostrip-image" />
        <button className="home-btn" onClick={() => navigate('/')}>
          <span className="btn-content">
            <span className="material-symbols-rounded">home</span>
            <span>Back to Home</span>
          </span>
        </button>
      </div>

      <div className="right-panel">
        <h2 className="scan-text">Scan the QR Code to download</h2>
        <hr className='line'/>
        <QRCode value={imageUrl} size={250} />
        <div className="logo-section">
          <img src="/cite_logo.svg" alt="Logo" className="logo-img" />
          <div>
            <h3 className='org-text'>COLLEGE OF INFORMATION TECHNOLOGY</h3>
            <h4 className='text'>STUDENT BODY ORGANIZATION</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
