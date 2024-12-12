// import { useState } from 'react';
import { Toolbar } from './components/Toolbar/Toolbar';
import { TabPanel } from './components/MetadataPanel/TabPanel';
import { SoundLibrary } from './components/SoundLibrary/SoundLibrary';
import { NoteEditor } from './components/NoteEditor/NoteEditor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Toolbar />
      <div className="main-content">
        <div className="left-panel">
          <TabPanel />
          <SoundLibrary />
        </div>
        <NoteEditor />
      </div>
    </div>
  );
}

export default App;
