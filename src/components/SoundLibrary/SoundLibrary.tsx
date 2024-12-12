import { useState, useRef } from 'react';
import { invoke, convertFileSrc } from '@tauri-apps/api/core';
import './SoundLibrary.css';

interface AudioFile {
  name: string;
  path: string;
}

export function SoundLibrary() {
  const [activeTab, setActiveTab] = useState<'Music' | 'HitSound'>('Music');
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<AudioFile | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleLoadAudio = async () => {
    try {
      const result = await invoke('load_audio', { audioType: activeTab }) as AudioFile;
      setAudioFiles(prev => [...prev, result]);
    } catch (error) {
      console.error('오디오 파일 로딩 실패:', error);
    }
  };

  const handlePlay = async () => {
    if (selectedFile && audioRef.current) {
      try {
        const assetUrl = convertFileSrc(selectedFile.path);
        audioRef.current.src = assetUrl;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      } catch (error) {
        console.error('재생 오류:', error);
      }
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleSelect = (file: AudioFile) => {
    setSelectedFile(file);
  };

  return (
    <div className="sound-library">
      <audio ref={audioRef} />
      <div className="tab-buttons">
        <button 
          className={`tab-btn ${activeTab === 'Music' ? 'active' : ''}`}
          onClick={() => setActiveTab('Music')}
        >
          Music
        </button>
        <button 
          className={`tab-btn ${activeTab === 'HitSound' ? 'active' : ''}`}
          onClick={() => setActiveTab('HitSound')}
        >
          HitSound
        </button>
      </div>
      <div className="sound-list">
        {audioFiles
          .filter(file => activeTab === 'Music' ? file.name.endsWith('.mp3') : file.name.endsWith('.wav'))
          .map((file, index) => (
            <div 
              key={index} 
              className={`sound-item ${selectedFile?.path === file.path ? 'selected' : ''}`}
              onClick={() => handleSelect(file)}
            >
              {file.name}
            </div>
          ))
        }
      </div> 
      <div className="sound-controls">
        <button onClick={handlePlay} disabled={!selectedFile}>Play</button>
        <button onClick={handleStop} disabled={!selectedFile}>Stop</button>
        <button>Delete</button>
        <button onClick={handleLoadAudio}>Load</button>
      </div>
    </div>
  );
}
