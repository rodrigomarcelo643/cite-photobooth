import { useState } from 'react';
import Swal from 'sweetalert2';

export default function usePhotoCapture(videoRef) {
  const [photos, setPhotos] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isCapturing, setIsCapturing] = useState(false);
  const [captureDelay, setCaptureDelay] = useState(3);

  const capturePhoto = () => {
    if (!videoRef || !videoRef.current) return;
    const video = videoRef.current;
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

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

  const handleCaptureClick = () => {
    if (photos.length >= 3) return;

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

  return {
    photos,
    setPhotos,
    timer,
    isCapturing,
    captureDelay,
    setCaptureDelay,
    handleCaptureClick,
    handleRetake,
  };
}
