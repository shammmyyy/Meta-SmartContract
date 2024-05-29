import React, { useState } from 'react';

function InstrumentSelector() {
  const [size, setSize] = useState('');
  const [stringCount, setStringCount] = useState('');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleStringCountChange = (e) => {
    setStringCount(e.target.value);
  };

  let message = 'Unknown instrument.';

  if (stringCount === '4') {
    message = 'The instrument is a ukulele.';
  } else if (size === 'big' && stringCount === '6') {
    message = 'The instrument is a guitar.';
  } else if (size === 'big' && stringCount === '4') {
    message = 'The instrument is a bass.';
  }

  return (
    <div className="instrument-selector-container">
      <div className="instrument-selector">
        <h2>Instrument Selector</h2>
        <div>
          <label>
            Choose size:
            <select value={size} onChange={handleSizeChange}>
              <option value="">Select size</option>
              <option value="small">Small</option>
              <option value="big">Big</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Enter string count:
            <input type="number" value={stringCount} onChange={handleStringCountChange} />
          </label>
        </div>
        <div className="message">{message}</div>
      </div>

      <style jsx>{`

        .instrument-selector-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          
        }

        .instrument-selector {
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .instrument-selector h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .instrument-selector label {
          display: block;
          margin-bottom: 5px;
        }

        .instrument-selector select,
        .instrument-selector input {
          padding: 5px;
          font-size: 16px;
        }

        .instrument-selector .message {
          margin-top: 10px;
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default InstrumentSelector;
