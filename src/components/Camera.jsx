import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import PhotoStrip from './PhotoStrip';
import { createRoot } from 'react-dom/client';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './C.css';

function Camera() {
  const videoRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureDelay, setCaptureDelay] = useState(3);
  const [isUploading, setIsUploading] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  const navigate = useNavigate();

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

  const handleCaptureClick = () => {
    if (captureDelay > 0) {
      setIsCapturing(true);
      let countdown = captureDelay - 1;
      setTimer(captureDelay);

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

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Flip horizontally to undo mirrored webcam preview
    context.save();
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    context.restore();

    const dataURL = canvas.toDataURL('image/png');

    setPhotos((prevPhotos) => [
      ...prevPhotos,
      {
        id: Date.now(),
        src: dataURL,
      },
    ]);
  };

  const handleRetake = async () => {
  const result = await Swal.fire({
    title: 'Retake all photos?',
    text: "This will delete all captured photos.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#003049',
    cancelButtonColor: '#C6C6C6',
    confirmButtonText: 'Yes, retake all',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    setPhotos([]);
    Swal.fire({
      title: 'Photos cleared!',
      text: 'You can now retake photos.',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
    });
  }
};
 
const handleDone = async () => {
  setIsUploading(true);

  const container = document.getElementById('hidden-photo-frame');

  const canvas = await html2canvas(container, {
    useCORS: true,
    backgroundColor: null,
    scale: 4,
  });

  const finalImage = canvas.toDataURL('image/png');

  const formData = new FormData();
  formData.append('file', finalImage);
  formData.append('upload_preset', 'cite-photobooth');

  try {
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/df3nxocat/image/upload',
      formData
    );

    const imageUrl = res.data.secure_url.replace('/upload/', '/upload/fl_attachment:photostrip/');
    navigate('/result', { state: { imageUrl } });
  } catch (err) {
    console.error('Cloudinary Upload Failed', err.response?.data || err.message);
  } finally {
    setIsUploading(false);
  }
};

  useEffect(() => {
    startVideoStream();
  }, []);

  useEffect(() => {
  if (isUploading) {
    const interval = setInterval(() => {
      setDotCount(prev => (prev + 1) % 4); // cycle from 0 to 3
    }, 500);
    return () => clearInterval(interval);
  } else {
    setDotCount(0);
  }
}, [isUploading]);

  return (
    <div className="wrapper">
    {isUploading && (
      <div className="loader-overlay">
        <div className="loader-content">
          <img src="/cite_logo.svg" alt="Loading..." className="floating-logo" />
          <h5 className="loading-text">Loading{'.'.repeat(dotCount)}</h5>
        </div>
      </div>
    )}
    <div className="container">
      <br />
      <header>
        <img src="/cite_logo.svg" alt="Logo" className="logo" />
        <h1>Trojan's photobooth</h1>
      </header>

      <section className="controls-top">
        <h4>{photos.length}/3</h4>
        <select
          value={captureDelay}
          onChange={(e) => setCaptureDelay(parseInt(e.target.value))}
          disabled={isCapturing || photos.length >= 3}
        >
          <option value={3}>3 seconds</option>
          <option value={5}>5 seconds</option>
          <option value={10}>10 seconds</option>
        </select>
      </section>

      <div className="preview-section">
        <div className="countdown">
          <video className="cam-preview" ref={videoRef} autoPlay playsInline></video>
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
            <div key={photo.id} className="photo">
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

      <center>
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
    </div>
  );
}

export default Camera;
