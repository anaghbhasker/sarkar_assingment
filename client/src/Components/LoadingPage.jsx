import React from "react";
import './loading.css'

function LoadingPage() {
  return (
    <div>
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingPage;
