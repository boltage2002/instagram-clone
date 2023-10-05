import React from 'react';
import Suggestion from './Suggestion'; // Adjust the path as needed
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">Timeline</div>
      <div className="timeline__right">
        <Suggestion />
      </div>
    </div>
  );
}

export default Timeline;
