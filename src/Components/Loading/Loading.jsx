import React from 'react';
import './styleLoading.css';

const Loading = () => {
  return (
    <div className="loader">
        <div className="face">
            <div className="circle"></div>
        </div>
        <div className="face">
            <div className="circle"></div>
        </div>
    </div>
  )
}

export default Loading