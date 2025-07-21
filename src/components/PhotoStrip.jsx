import React from 'react';
import './PS.css';

function PhotoStrip({ photos }) {
  return (
    <>
    <div className="frame-container">
      <div class="particles-static"></div>
      <div className="frame">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="photo-slot">
            {photos[index] ? (
              <img src={photos[index].src} alt={`Photo ${index + 1}`} />
            ) : (
              <div className="placeholder" />
            )}
          </div>
        ))}
      </div>
      <div className="footer">
        <img src="/cite_logo.svg" alt="CITE Logo" />
        <section>
            <h2>Freshie Fair 2025</h2>
            <p>08/01/2025</p>
        </section>
        <img src="/cite_logo.svg" alt="CITE Logo" />
      </div>
    </div>
    </>
  );
}

export default PhotoStrip;
