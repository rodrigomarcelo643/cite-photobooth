import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { QRCode } from 'react-qrcode-logo';

const Result = () => {
  const navigate = useNavigate(); 

  const downloadImages = () => {
    // Logic to trigger image download
    // Example: could open a new window or trigger a download programmatically
  };

  return (
    <div className="result-container">
      <h1>Freshie Fair 2025</h1>
      <div className="result-images">
        <img src="image_placeholder_1.jpg" alt="Image 1" />
        <img src="image_placeholder_2.jpg" alt="Image 2" />
        <img src="image_placeholder_3.jpg" alt="Image 3" />
      </div>
      <QRCode value="https://link_to_download_images" size={128} />
      <button onClick={downloadImages}>Download</button>
    </div>
  );
};

export default Result;
