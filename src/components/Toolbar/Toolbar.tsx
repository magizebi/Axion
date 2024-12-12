import './Toolbar.css';

export function Toolbar() {
  return (
    <div className="toolbar">
      <div className="menu-bar">
        <button className="menu-item">File</button>
        <button className="menu-item">Edit</button>
        <button className="menu-item">View</button>
        <button className="menu-item">Tools</button>
        <button className="menu-item">Playback</button>
        <button className="menu-item">Help</button>
      </div>
      <div className="tool-controls">
        <div className="grid-controls">
          <label>Grid:</label>
          <select defaultValue="1/16">
            <option value="1/4">1/4</option>
            <option value="1/8">1/8</option>
            <option value="1/16">1/16</option>
            <option value="1/32">1/32</option>
          </select>
        </div>
        <div className="playback-controls">
          <button className="control-btn">⏮</button>
          <button className="control-btn">▶</button>
          <button className="control-btn">⏭</button>
        </div>
      </div>
    </div>
  );
}
