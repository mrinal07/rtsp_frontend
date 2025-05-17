import React, { useState, useRef } from 'react';

function StreamItem({ url }) {
    
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '0.5rem',
      margin: '0.5rem',
      maxWidth: '400px',
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <video
        ref={videoRef}
        src={url}
        autoPlay
        controls={false}
        style={{ width: '100%', borderRadius: '4px', backgroundColor: '#000' }}
      />
      <button
        onClick={handlePlayPause}
        style={{ marginTop: '0.5rem', padding: '0.3rem 0.8rem' }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <p style={{ fontSize: '0.8rem', marginTop: '0.3rem', wordBreak: 'break-all' }}>
        {url}
      </p>
    </div>
  );
}

export default StreamItem;
