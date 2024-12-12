import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import './ImageForm.css';

export function ImageForm() {
  const [songImage, setSongImage] = useState<string | null>(null);
  const [smallImage, setSmallImage] = useState<string | null>(null);

  const handleImageSelect = async (imageType: 'song' | 'small') => {
    try {
      const chunks = await invoke('load_image') as string[];
      
      const base64Data = chunks.join('');
      const dataUrl = `data:image/png;base64,${base64Data}`;

      if (imageType === 'song') {
        setSongImage(dataUrl);
      } else {
        setSmallImage(dataUrl);
      }

      const img = new Image();
      img.onload = () => {
        console.log(`${imageType} image size: ${img.width}x${img.height}`);
      };
      img.src = dataUrl;
    } catch (error) {
      console.error('이미지 로딩 실패:', error);
    }
  };

  return (
    <div className="image-form">
      <div className="button-group">
        <button className="image-button" onClick={() => handleImageSelect('song')}>
          Song Image
        </button>
        <button className="image-button" onClick={() => handleImageSelect('small')}>
          Small Image
        </button>
      </div>
      
      <div className="image-preview-container">
        <div className="image-preview">
          {songImage ? (
            <img src={songImage} alt="Song Preview" />
          ) : (
            <div className="image-placeholder">
              <span>Song Image</span>
            </div>
          )}
        </div>
        <div className="image-preview">
          {smallImage ? (
            <img src={smallImage} alt="Small Preview" />
          ) : (
            <div className="image-placeholder">
              <span>Small Image</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 