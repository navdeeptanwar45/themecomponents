import React from "react";

const ProgressBar = ({ progress=0 }) => {
  return (
    <div>
      <div className="progress-bar-main">
       <div className="progress-bar-filled" style={{ width: `${progress}%`}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
