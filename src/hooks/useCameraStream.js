import { useEffect, useRef } from 'react';

export default function useCameraStream() {
  const videoRef = useRef(null);

  useEffect(() => {
    let streamRef = null;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          streamRef = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing camera: ', error);
      });

    // Cleanup: Stop all tracks when unmounting to turn off camera indicator
    return () => {
      if (streamRef) {
        streamRef.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return videoRef;
}
