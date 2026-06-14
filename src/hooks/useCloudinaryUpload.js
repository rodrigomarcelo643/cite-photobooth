import { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { uploadImage } from '../utils/cloudinary';

const canvasToBlob = (canvas, type = 'image/jpeg', quality = 0.9) =>
  new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to create image blob'));
        return;
      }
      resolve(blob);
    }, type, quality);
  });

export default function useCloudinaryUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    if (isUploading) {
      const interval = setInterval(() => {
        setDotCount((prev) => (prev + 1) % 4); // cycle from 0 to 3
      }, 500);
      return () => clearInterval(interval);
    } else {
      setDotCount(0);
    }
  }, [isUploading]);

  const uploadPhotoStrip = async (elementId) => {
    setIsUploading(true);
    try {
      const container = document.getElementById(elementId);
      if (!container) {
        throw new Error(`Element with id "${elementId}" not found`);
      }

      const renderScale = Math.min(window.devicePixelRatio || 1, 2);

      const canvas = await html2canvas(container, {
        useCORS: true,
        backgroundColor: '#ffffff',
        scale: renderScale,
        removeContainer: true,
      });

      const imageBlob = await canvasToBlob(canvas, 'image/jpeg', 0.88);
      const secureUrl = await uploadImage(imageBlob);

      // Apply Cloudinary optimization and download parameters
      const imageUrl = secureUrl.replace(
        '/upload/',
        '/upload/q_auto,f_auto/fl_attachment:photostrip/'
      );

      return imageUrl;
    } catch (err) {
      console.error('Cloudinary Upload Failed', err.response?.data || err.message);
      throw err;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    dotCount,
    uploadPhotoStrip,
  };
}
