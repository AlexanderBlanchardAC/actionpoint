import React from 'react';
import './justGiving.css';
import { justGivingData } from '../../data';
import { Link } from 'react-router-dom';

const JustGiving = () => {
    const { header, justGivingLogo, qr, logoLink } = justGivingData;

  return (
    <div className='justGivingContainer'> 
        <h3 className="justGivingHeader">
            {header}
        </h3>
        <div className="justGivingImages">
            <div className="justGivingLogo">
                <Link to={logoLink}>
                    <img src={justGivingLogo} className="logoImage" alt='Just Giving Logo' />
                </Link>
            </div>
            <div className="justGivingQr">
                <img src={qr} className='qrImage' alt='Just Giving QR Code' />
            </div>
        </div>
        
    </div>
  )
}

export default JustGiving
