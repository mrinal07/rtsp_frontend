import React, { useState } from 'react';

function StreamInput({ onAddStream }) {
  const [url, setUrl] = useState('');

  const handleAdd = () => {
    if (url.trim() === '') {
      alert('Please enter a valid RTSP URL');
      return;
    }
    onAddStream(url.trim());
    setUrl(''); // clear input after adding
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Enter RTSP stream URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ width: '70%', padding: '0.5rem', fontSize: '1rem' }}
      />
      <button
        onClick={handleAdd}
        style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem', fontSize: '1rem' }}
      >
        Add Stream
      </button>
    </div>
  );
}

export default StreamInput;
