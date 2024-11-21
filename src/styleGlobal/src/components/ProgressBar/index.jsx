import React from 'react';
import './style.scss';

const CircleProgressBar = ({ percentage, onChange }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const handleClick = (e) => {
    const svg = e.target.closest('svg');
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const angle = Math.atan2(y, x);
    const degrees = (angle * 180) / Math.PI + 90;

    let newPercentage = ((degrees + 360) % 360) / 360 * 100;
    if (newPercentage < 0) newPercentage += 100;
    onChange(newPercentage);
  };

  return (

    
    <div className="circle-container">
      <div className="circle-progress-wrapper" onClick={handleClick}>
        <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet">
          
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="circle-progress-background"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="circle-progress-foreground"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="circle-percentage">{Math.round(percentage)}%</div>
      </div>
    </div>
  );
};

export default CircleProgressBar;