import React, { useEffect, useState } from 'react';
import './style.scss';

const CircleProgressBar = ({ percentage, onChange }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;


  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const newOffset = circumference - (percentage / 100) * circumference;
    setOffset(newOffset);
  }, [percentage, circumference]);  

  return (
    <div className="circle__container">
      <div className="circle__progress-wrapper">
        <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="gradient" x1="35%" y1="0%" x2="80%" y2="90%">
              <stop offset="0%" style={{ stopColor: "#16CFB3", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#A444FF", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="circle__progress-foreground"
            strokeWidth={strokeWidth}
            fill="none"
            stroke="url(#gradient)"  
            strokeDasharray={circumference} 
            strokeDashoffset={offset}  
            style={{
              transition: 'stroke-dashoffset 1s ease',  
            }}
          />
        </svg>
        <div className="circle__percentage">{Math.round(percentage)}%</div>
      </div>
    </div>
  );
};

export default CircleProgressBar;