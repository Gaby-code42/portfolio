import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [faCircleInfo, faProjectDiagram, faHome, faCircleInfo];
  const labels = ["Home", "Profile", "Message", "Photos"];

  return (
    <div className='nav'>
      <div className="navigation">
        <ul>
          {icons.map((icon, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <a>
                <span className="icon">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <span className="text">{labels[index]}</span>
              </a>
            </li>
          ))}

          {/* INDICATOR */}
          <div
            className="indicator"
            style={{
              transform: `translateX(${activeIndex * 70}px)`
            }}
          ></div>
        </ul>
      </div>
    </div>
  );
};

export default About;