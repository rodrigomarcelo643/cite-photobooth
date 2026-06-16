import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoStrip from '../PhotoStrip/PhotoStrip';
import useCameraStream from '../../hooks/useCameraStream';
import usePhotoCapture from '../../hooks/usePhotoCapture';
import useCloudinaryUpload from '../../hooks/useCloudinaryUpload';
//import GrandFreshmenLogo from '../Logo';
import '../../styles/Camera.css';

function Camera() {
  const navigate = useNavigate();
  const videoRef = useCameraStream();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const cameraContainerRef = useRef(null);

  const {
    photos,
    timer,
    isCapturing,
    captureDelay,
    setCaptureDelay,
    handleCaptureClick,
    handleRetake,
  } = usePhotoCapture(videoRef);

  const {
    isUploading,
    dotCount,
    uploadPhotoStrip,
  } = useCloudinaryUpload();

  const handleDone = async () => {
    try {
      const imageUrl = await uploadPhotoStrip('hidden-photo-frame');
      navigate('/result', { state: { imageUrl } });
    } catch (err) {
      // Error logged inside hook
    }
  };

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden relative" ref={cameraContainerRef}>
      {isUploading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1a3e]/85 backdrop-blur-md transition-all duration-300">
          <div className="bg-white/95 rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl flex flex-col items-center text-center border border-[#ec6a40]/25 transform scale-100 transition-all">
            {/* Panpan mascot */}
            <img
              src="/awscc/panpan2.png"
              alt="Panpan"
              className="floating-logo w-24 h-24 object-contain mb-2"
            />

            {/* Text */}
            <h3 className="text-[#1a1a3e] font-black text-xl mb-1 tracking-tight">Uploading Photo Strip</h3>
            <p className="text-gray-500 text-sm mb-6 font-medium">Saving your wonderful memories! ✨</p>

            {/* Progress Bar (Infinite pulsing) */}
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-2 relative">
              <div 
                className="bg-gradient-to-r from-[#ec6a40] to-[#f58e64] h-full rounded-full transition-all duration-75 ease-out shadow-lg shadow-[#ec6a40]/25 animate-pulse w-full"
              />
            </div>
            
            {/* Progress text */}
            <span className="text-[#ec6a40] font-black text-sm tracking-wider">Please wait{'.'.repeat(dotCount)}</span>
          </div>
        </div>
      )}

      {/* Cloud decorations */}
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute top-4 left-6 w-44 opacity-40 pointer-events-none" />
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute top-2 right-16 w-56 opacity-30 pointer-events-none" />
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute bottom-16 left-8 w-48 opacity-35 pointer-events-none" />
      <img src="/awscc/awscc_cloud.png" alt="" className="absolute bottom-4 right-4 w-36 opacity-40 pointer-events-none" />

      {/* Fullscreen toggle button */}
      <button
        onClick={toggleFullscreen}
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        className="fullscreen-btn"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? (
          /* Minimize icon */
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="8 3 3 3 3 8" />
            <line x1="10" y1="10" x2="3" y2="3" />
            <polyline points="16 21 21 21 21 16" />
            <line x1="14" y1="14" x2="21" y2="21" />
          </svg>
        ) : (
          /* Fullscreen icon */
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        )}
      </button>

      <div className="flex flex-col items-center -mt-4 justify-center w-full">
          <img src="/awssbg/logo_grand_freshmen.png" className=" w-30 h-auto" />
        <p className="text-[#f58e64] text-xl text-center mb-6 font-bold tracking-[0.2em]">2026 · PHOTOBOOTH</p>

        <div className="preview-section">
          <div className="countdown" style={{ maxWidth: '800px' }}>
            <video 
              className="cam-preview" 
              ref={videoRef} 
              autoPlay 
              playsInline
              style={{ width: '800px', height: '500px' }}
            ></video>
            {isCapturing && timer > 0 && (
              <div className="countdown-overlay">
                <span key={timer} className="countdown-number">{timer}</span>
              </div>
            )}
          </div>
          <div className="preview-content">
            {/* Individual photos visible on the right */}
            <div id="photos" className="photos">
              {photos.map((photo) => (
                <div key={photo.id} className="photo mb-1">
                  <img src={photo.src} alt={`captured-${photo.id}`} />
                </div>
              ))}
            </div>

            {/* Hidden PhotoStrip frame for upload purposes */}
            <div id="hidden-photo-frame">
              <PhotoStrip photos={photos} />
            </div>
          </div>
        </div>

        <center className="flex justify-center items-center gap-4 mt-4">
          <section className="flex items-center justify-center gap-4 mt-2">
            <h4>{photos.length}/3</h4>
            <select
              value={captureDelay}
              onChange={(e) => setCaptureDelay(parseInt(e.target.value))}
              disabled={isCapturing || photos.length >= 3}
              className="bg-white p-4 rounded-full cursor-pointer"
            >
              <option value={1}>1 second</option>
              <option value={3}>3 seconds</option>
              <option value={5}>5 seconds</option>
              <option value={10}>10 seconds</option>
            </select>
          </section>
          {photos.length < 3 && (
            <button
              className="capture-btn"
              onClick={handleCaptureClick}
              disabled={isCapturing}
            >
              <span className="btn-content">
                <span className="material-symbols-rounded">photo_camera</span>
                Capture
              </span>
            </button>
          )}

          {photos.length === 3 && (
            <div className="done-retake-group">
              <button className="retake-btn" onClick={handleRetake}>
                Retake
              </button>
              <button className="done-btn" onClick={handleDone}>
                <span>Done →</span>
              </button>
            </div>
          )}
        </center>
      </div>

      <div className="flex items-center gap-2 justify-start absolute top-8 left-8 text-sm font-semibold z-10">
        <p className="text-[#ec6a40]/80 inline-flex items-center gap-2 whitespace-nowrap">
          <span>Powered by</span>
          <img src="/awssbg/aws-sbg-logo.jpg" height={30} width={30} alt="AWSSBG" className="rounded-full" />
          <span>AWSSBG</span>
        </p>
      </div>
    </div>
  );
}

export default Camera;
