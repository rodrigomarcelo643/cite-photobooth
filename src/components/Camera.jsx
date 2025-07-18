import React, { useState, useRef, useEffect } from 'react';
import './C.css';

function Camera() {
  const videoRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isCapturing, setIsCapturing] = useState(false);

  const startVideoStream = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera: ', error);
      });
  };

  // Capture photo with timer
  const handleCaptureClick = () => {
    if (timer > 0) {
      setIsCapturing(true);
      let countdown = timer - 1;
      const countdownInterval = setInterval(() => {
        setTimer(countdown);
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          capturePhoto();
          setTimer(0);
          setIsCapturing(false);
        }
        countdown--;
      }, 1000);
    } else {
      capturePhoto();
    }
  };

  // Function to capture photo
  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL('image/png');

    setPhotos((prevPhotos) => [
      ...prevPhotos,
      {
        id: Date.now(),
        src: dataURL,
      },
    ]);
  };

  useEffect(() => {
  startVideoStream();
}, []);


  return (
    <div className="container">
        <header>
            <img src="/cite_logo.svg" alt="Logo" className='logo'/>
            <h1>CITE photobooth</h1>
        </header>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ border: '2px solid #333', width: '640px', height: '480px' }}
        ></video>
      <div className="controls">
        <button onClick={handleCaptureClick} disabled={isCapturing}>
          {isCapturing ? `Capturing... (${timer})` : 'Capture'}
        </button>
      </div>

      <div id="photos" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {photos.map((photo) => (
          <div key={photo.id} className="photo" style={{ margin: '10px', position: 'relative' }}>
            <img
              src={photo.src}
              alt={`captured-${photo.id}`}
              style={{ width: '160px', height: '120px', border: '2px solid #333' }}
            />
            <button
              onClick={() => {
                const a = document.createElement('a');
                a.href = photo.src;
                a.download = 'photo.png';
                a.click();
              }}
              style={{
                position: 'absolute',
                bottom: '5px',
                left: '27.5%',
                padding: '5px',
                cursor: 'pointer',
              }}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Camera;
