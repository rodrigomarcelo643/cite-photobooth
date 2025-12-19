import React from 'react';
import './PS.css';

function PhotoStrip({ photos }) {
  return (
    <div className="frame-container w-[300px] bg-[#FFBB5F] p-4 overflow-hidden relative ">
      
      {/* <h2 className='freshie-title'>
        <span className="freshie">Freshie</span> <br/>
        <span className="fair">Fair</span> <br/>
        <span className="year">2025</span>
      </h2> */}
      <div className="frame">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={`photo-slot photo-${index}`}>
            {photos[index] ? (
              <img src={photos[index].src} alt={`Photo ${index + 1}`} />
            ) : (
              <div className="placeholder" />
            )}
          </div>
        ))}

      </div>
       <img src="/logos/MLOB.png" alt="MLOB Logo" className='mt-10' />
      {/* <img src="/cite_logo.svg" alt="CITE Logo" className='cat-1' /> */}
      <img src="/pet-elements/element-1.svg" height={120} width={120} alt="Cat Element" className='absolute top-35 right-[-25px] ' />
      <img src="/pet-elements/element-3.svg" height={120} width={120} alt="Cat Element" className='absolute top-80 left-[-15px] transform scale-x-[-1]' />
      <img src="/pet-elements/element-2.svg" height={120} width={120} alt="Cat Element" className='absolute top-128 right-[-15px] transform scale-x-[-1]' />
      <div className="flex flex-row items-center justify-center gap-x-2 scale-60">
          <img src="/public/logos/official_seal_of_cebu_city_small.png" height={55} width={55} alt="Cebu City Logo" className=" rounded-full" />
          <img src="/public/logos/dvmf_logo.jpg" height={55} width={55} alt="DVMF Logo" className=" rounded-full" />
          <img src="/public/logos/sambag_1_logo.jpg" height={55} width={55} alt="Sambag 1 Logo" className=" rounded-full" />
          <img src="/public/logos/sambag_2_logo.png" height={55} width={55} alt="Sambag 2 Logo" className=" rounded-full" />
          <img src="/public/logos/saver_logo.png" height={65} width={65} alt="Saver Logo" className=" rounded-full" />
          <img src="/public/logos/pawtopia_logo.png" height={55} width={55} alt="Pawtopia Logo" className="" />
          <img src="/cite_logo.svg" height={65} width={65} alt="SWU Logo" className="" />
        </div>
    </div>
  );
}

export default PhotoStrip;
