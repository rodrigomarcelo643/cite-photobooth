import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../styles/WelcomeScreen.css';
import GrandFreshmenLogo from '../Logo';

const stripsData = [
  { id: 1, rotation: -4, photos: ['/awscc/panpan1.png', '/awscc/panpan2.png', '/awscc/panpan3.png'] },
  { id: 2, rotation: 3, photos: ['/awscc/panpan4.png', '/awscc/panpan5.png', '/awscc/panpan1.png'] },
  { id: 3, rotation: -2, photos: ['/awscc/panpan2.png', '/awscc/panpan3.png', '/awscc/panpan4.png'] },
  { id: 4, rotation: 5, photos: ['/awscc/panpan5.png', '/awscc/panpan1.png', '/awscc/panpan2.png'] },
];

const MockPhotoStrip = ({ rotation, photos }) => {
  return (
    <div 
      className="mock-photostrip w-[85px] h-[170px] rounded p-2 flex flex-col gap-1.5 shadow-md"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        background: 'linear-gradient(180deg, #ec6a40 0%, #f58e64 55%, #feb994 100%)',
        flexShrink: 0
      }}
    >
      {photos.map((src, index) => (
        <div key={index} className="bg-white/90 rounded-sm aspect-square overflow-hidden flex items-center justify-center p-0.5">
          <img src={src} alt="Mascot" className="w-full h-full object-contain" />
        </div>
      ))}
      <div className="flex justify-between items-center px-0.5 mt-auto">
        <span className="text-[5px] font-bold text-white tracking-tighter">MEETUP '26</span>
        <span className="text-[5px] font-bold text-white/80">#CITE</span>
      </div>
    </div>
  );
};

function WelcomeScreen() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              navigate('/camera');
            }, 150);
            return 100;
          }
          return prev + 2;
        });
      }, 25); // 25ms * 50 steps = 1250ms loading duration
    }
    return () => clearInterval(interval);
  }, [isLoading, navigate]);

  const handleStart = () => {
    setIsLoading(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 overflow-x-hidden relative">

      {/* Panpan mascots */}
      <img src="/awscc/panpan3.png" className="icon absolute right-10 bottom-24 w-32 h-auto lg:w-44 lg:right-24 lg:bottom-28 hidden md:block pointer-events-none" alt="Panpan" />
      <img src="/awscc/panpan2.png" className="icon absolute right-8 top-16 w-32 h-auto lg:w-44 lg:right-20 lg:top-24 hidden md:block pointer-events-none" alt="Panpan" />
      <img src="/awscc/panpan4.png" className="icon absolute left-8 top-16 w-32 h-auto lg:w-44 lg:left-20 lg:top-24 hidden md:block pointer-events-none" alt="Panpan" />
      <img src="/awscc/panpan5.png" className="icon absolute left-10 bottom-24 w-32 h-auto lg:w-44 lg:left-24 lg:bottom-28 hidden md:block pointer-events-none" alt="Panpan" />

      {/* Center content */}
      <div className="flex flex-col justify-center items-center text-center z-10">
        <GrandFreshmenLogo size="lg" theme="dark" className="mb-6" />
        <p className="text-[#f58e64] text-2xl font-bold tracking-[0.3em]">2026 · PHOTOBOOTH</p>
        
        <button className="start-btn mt-8" onClick={handleStart}>
          <span>START →</span>
        </button>

        {/* Infinite marquee showcase */}
        <div className="marquee-container mt-12 w-full max-w-[460px] py-2">
          <div className="marquee-content">
            {stripsData.map((strip) => (
              <MockPhotoStrip key={`strip-1-${strip.id}`} rotation={strip.rotation} photos={strip.photos} />
            ))}
            {stripsData.map((strip) => (
              <MockPhotoStrip key={`strip-2-${strip.id}`} rotation={strip.rotation} photos={strip.photos} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 justify-center absolute bottom-8 text-center text-sm font-semibold z-10">
        <p className="text-[#ec6a40]/80 inline-flex items-center gap-2 whitespace-nowrap">
          <span>Powered by</span>
          <img src="/awssbg/aws-sbg-logo.jpg" height={30} width={30} alt="AWSSBG" className="rounded-full" />
          <span>AWSSBG</span>
        </p>
      </div>

      {/* Loading Modal Delay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1a3e]/85 backdrop-blur-md transition-all duration-300">
          <div className="bg-white/95 rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl flex flex-col items-center text-center border border-[#ec6a40]/25 transform scale-100 transition-all">
            {/* Panpan mascot */}
            <img
              src="/awscc/panpan2.png"
              alt="Panpan"
              className="floating-logo w-24 h-24 object-contain mb-2"
            />

            {/* Text */}
            <h3 className="text-[#1a1a3e] font-black text-xl mb-1 tracking-tight">Setting Up Photobooth</h3>
            <p className="text-gray-500 text-sm mb-6 font-medium">Get ready to flash your smile! ✨</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2 relative">
              <div 
                className="bg-gradient-to-r from-[#ec6a40] to-[#f58e64] h-full rounded-full transition-all duration-75 ease-out shadow-lg shadow-[#ec6a40]/25"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Progress percent */}
            <span className="text-[#ec6a40] font-black text-sm tracking-wider">{progress}%</span>
          </div>
        </div>
      )}

    </div>
  );
}

export default WelcomeScreen;
