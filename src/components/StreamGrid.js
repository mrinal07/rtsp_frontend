import React from 'react';
import StreamItem from './StreamItem';

function StreamGrid({ streams }) {
  return (
    <div
      className="stream-grid"
    >
      {streams.map((url, index) => (
        <StreamItem key={index} url={url} />
      ))}
    </div>
  );
}

export default StreamGrid;
