import './MetadataForm.css';

export function MetadataForm() {
  return (
    <div className="metadata-form">
      <div className="input-group">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label>Artist</label>
        <input type="text" />
      </div>
      <div className="input-group">
        <label>Noter</label>
        <input type="text" />
      </div>
      <div className="metadata-grid">
        <div className="input-group">
          <label>Level</label>
          <input type="number" min="1" max="99" />
        </div>
        <div className="input-group">
          <label>BPM</label>
          <input type="number" />
        </div>
        <div className="input-group">
          <label>ID</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Genre</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Time</label>
          <input type="text" readOnly className="readonly-input" />
        </div>
        <div className="input-group">
          <label>Note</label>
          <input type="number" readOnly className="readonly-input" />
        </div>
      </div>
    </div>
  );
} 