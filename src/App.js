import React, { useState } from 'react';
import StreamInput from './components/StreamInput';
import StreamGrid from './components/StreamGrid';

function App() {
  const [streams, setStreams] = useState([]);

  const addStream = (url) => {
    // Prevent duplicates
    if (streams.includes(url)) {
      alert('Stream already added!');
      return;
    }
    setStreams((prev) => [...prev, url]);
  };

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '1rem' }}>

      <h1 style={{ textAlign: 'center' }}>RTSP Stream Viewer</h1>
      
      <StreamInput onAddStream={addStream} />
      {streams.length > 0 ? (
        <StreamGrid streams={streams} />
      ) : (
        <p style={{ textAlign: 'center' }}>No streams added yet.</p>
      )}
    </div>
  );
}

export default App;
