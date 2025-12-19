import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import './R.css';
import Snowfall from 'react-snowfall';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const imageUrl = state?.imageUrl;

  if (!imageUrl) {
    return <div>Error: No image URL provided.</div>;
  }

  return (
    <div className="result-container">
       <Snowfall 
              color="	#c6fbff"
              snowflakeCount={200}
              style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: 100,
              }}
            />
      <div className="left-panel">
        <img src={imageUrl} alt="Photostrip" className="photostrip-image" />
        <button className="home-btn" onClick={() => navigate('/')}>
          <span className="btn-content">
            <span className="material-symbols-rounded">home</span>
            <span>Back to Home</span>
          </span>
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="scan-text">Scan the QR Code to download</h2>
        <hr className='line'/>
        <QRCode value={imageUrl} size={250} />
        <div className="logo-section">
          <p className="text-5xl my-6">
            <span className='text-[#00336C] font-bold'>MERRY</span><span className='text-[#D2273A] font-bold'> CHRIST<span className='text-[#F5BE01] font-bold'>MAS</span></span><span className='text-[#00336C] font-bold'> PAWS</span> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
