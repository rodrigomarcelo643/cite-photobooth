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
    <div className="result-container relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl" />
      </div>

      {/* Panpan peeking bottom-left */}
      <img
        src="/awscc/panpan2.png"
        alt="Panpan"
        className="absolute bottom-4 left-4 w-36 opacity-90 pointer-events-none drop-shadow-xl"
      />

       <img
        src="/awscc/panpan4.png"
        alt="Panpan"
        className="absolute top-4 left-4 w-36 opacity-90 pointer-events-none drop-shadow-xl"
      />

       <img
        src="/awscc/panpan1.png"
        alt="Panpan"
        className="absolute right-4 top-4 w-36 opacity-90 pointer-events-none drop-shadow-xl"
      />

        <img
        src="/awscc/panpan3.png"
        alt="Panpan"
        className="absolute right-4 bottom-4 w-36 opacity-90 pointer-events-none drop-shadow-xl"
      />

      {/* Left panel: photostrip + back button */}
      <div className="left-panel relative z-10">
        <img src={imageUrl} alt="Photostrip" className="photostrip-image" />
       
      </div>

      {/* Right panel: QR code in safe-zone card */}
      <div className="flex flex-col justify-center items-center relative z-10">
        <div className=" p-8 flex flex-col items-center">
          <h2 className="scan-text">Scan the QR Code to download</h2>
          <hr className="line" />
          <QRCode value={imageUrl} size={220} className='border border-[#ec6a40] border-4 rounded-lg'/>

          <div className="mt-6 flex flex-col items-center gap-3">
          <img
            src="/awscc/it_summit_logo.png"
            height={52}
            width={200}
            alt="IT Next Summit Logo"
            className="mt-4"
            style={{ filter: 'drop-shadow(0 10px 8px rgba(236, 106, 64, 0.35))' }}
          />
            <p className="text-2xl font-black text-[#ec6a40] tracking-widest">2026</p>
          <button className="home-btn" onClick={() => navigate('/')}>
            <span className="btn-content">
              <span className="material-symbols-rounded">home</span>
              <span>Back to Home</span>
            </span>
          </button>
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default Result;

