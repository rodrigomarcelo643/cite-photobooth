import React from 'react';
import GrandFreshmenLogo from '../Logo';
import '../../styles/PhotoStrip.css';

function PhotoStrip({ photos }) {
  return (
    <div
      className="frame-container w-[400px] overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #ec6a40 0%, #f58e64 55%, #feb994 100%)' }}
    >

      {/* Photo slots */}
      <div className="frame p-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={`photo-slot photo-${index} rounded-xl overflow-hidden`}>
            {photos[index] ? (
              <img src={photos[index].src} alt={`Photo ${index + 1}`} />
            ) : (
              <div className="placeholder" />
            )}
          </div>
        ))}
      </div>

      {/* Panpan side decorators */}
      <img
        src="/awscc/panpan2.png"
        width={90} height={90}
        alt="Panpan"
        className="absolute top-36 right-[-5px]"
      />
      <img
        src="/awscc/panpan3.png"
        width={90} height={90}
        alt="Panpan"
        className="absolute top-[330px] left-[-5px] scale-x-[-1]"
        style={{ transform: 'scaleX(-1)' }}
      />

      <img
        src="/awscc/panpan5.png"
        width={90} height={90}
        alt="Panpan"
        className="absolute bottom-35 right-[-5px]"
      />

      {/* Bottom branding safe-zone */}
      <div className="flex flex-col items-center justify-center gap-2 pb-4 px-4">
         
        <div className='flex flex-row items-center gap-2 justify-center'>
            <img src="/awssbg/logo_grand_freshmen.png" className=" w-25 h-auto" />
             <img src="/awssbg/aws-sbg-logo-transparent.png" className=" w-15 h-auto" />
        </div>
  
      </div>
    </div>
  );
}

export default PhotoStrip;
