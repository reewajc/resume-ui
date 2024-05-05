import React from 'react';
import awsda from '../assets/awsda.png';
import awspa from '../assets/awspa.png';
import './certification.css'; // Import CSS file for styling

const Certification = () => {
  return (
    <div className="certification-container">
      <div className="certification-item">
        <img className="certification-image" src={awsda} alt="AWS Certified Developer - Associate" />
      </div>
      <div className="certification-item">
        <img className="certification-image" src={awspa} alt="AWS Certified Cloud Practitioner" />
      </div>
    </div>
  );
};

export default Certification;
