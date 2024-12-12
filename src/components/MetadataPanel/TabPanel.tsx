import { useState } from 'react';
import { MetadataForm } from './MetadataForm';
import { SettingsForm } from './SettingsForm';
import { ImageForm } from './ImageForm';
import './TabPanel.css';

export function TabPanel() {
  const [activeTab, setActiveTab] = useState<'INFO' | 'SET' | 'IMAGE'>('INFO');

  return (
    <div className="tab-panel">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'INFO' ? 'active' : ''}`}
          onClick={() => setActiveTab('INFO')}
        >
          INFO
        </button>
        <button
          className={`tab-button ${activeTab === 'SET' ? 'active' : ''}`}
          onClick={() => setActiveTab('SET')}
        >
          SET
        </button>
        <button
          className={`tab-button ${activeTab === 'IMAGE' ? 'active' : ''}`}
          onClick={() => setActiveTab('IMAGE')}
        >
          IMAGE
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'INFO' && <MetadataForm />}
        {activeTab === 'SET' && <SettingsForm />}
        {activeTab === 'IMAGE' && <ImageForm />}
      </div>
    </div>
  );
} 