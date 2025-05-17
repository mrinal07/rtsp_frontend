import React from 'react';
import StreamItem from './StreamItem';

function StreamGrid({ streams }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
      }}
    >
      {streams.map((url, index) => (
        <StreamItem key={index} url={url} />
      ))}
    </div>
  );
}

export default StreamGrid;
