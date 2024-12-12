import './SettingsForm.css';

export function SettingsForm() {
  return (
    <div className="settings-form">
      <div className="settings-group">
        <label className="settings-label">LEVEL</label>
        <div className="radio-group">
          <div className="radio-button">
            <input type="radio" id="easy" name="level" value="EASY" defaultChecked />
            <label htmlFor="easy">EASY</label>
          </div>
          <div className="radio-button">
            <input type="radio" id="norm" name="level" value="NORM" />
            <label htmlFor="norm">NORM</label>
          </div>
          <div className="radio-button">
            <input type="radio" id="hard" name="level" value="HARD" />
            <label htmlFor="hard">HARD</label>
          </div>
        </div>
      </div>

      <div className="settings-group">
        <label className="settings-label">SPEED</label>
        <div className="radio-group speed-options">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((speed) => (
            <div key={speed} className="radio-button">
              <input
                type="radio"
                id={`speed-${speed}`}
                name="speed"
                value={speed}
                defaultChecked={speed === 1}
              />
              <label htmlFor={`speed-${speed}`}>{speed}X</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 