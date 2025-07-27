import React from 'react';
import './PS.css';

function PhotoStrip({ photos }) {
  return (
    <div className="frame-container">
      <div class="bg-pattern">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="line line4"></div>
      </div>
      <h2 className='freshie-title'>
        <span className="freshie">Freshie</span> <br/>
        <span className="fair">Fair</span> <br/>
        <span className="year">2025</span>
      </h2>
      <div className="frame">
        <img src="/warning.svg" alt="CITE Logo" className='warning-1' />
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={`photo-slot photo-${index}`}>
            {photos[index] ? (
              <img src={photos[index].src} alt={`Photo ${index + 1}`} />
            ) : (
              <div className="placeholder" />
            )}
          </div>
        ))}
        <img src="/rbt.svg" alt="CITE Logo" className='warning-2' />
      </div>
      <img src="/cite_logo.svg" alt="CITE Logo" className='cat-1' />
    </div>
  );
}

export default PhotoStrip;
