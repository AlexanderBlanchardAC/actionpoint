import React from 'react';
import './sponsors.css';
import { sponsorsData } from '../../data';

const Sponsors = () => {
    const { sponsorsHeader, sponsors } = sponsorsData;

  return (
    <div className='sponsorsContainerInner'>

        <h2 className="sponsorsHeader">
            {sponsorsHeader}
        </h2>
        <div className="sponsors">
            {sponsors.map((sponsor, index) => {
                return(
                <div className="eachSponsor" key={index}>
                    <img src={sponsor.image} className='sponsorLogo' alt={sponsor.name} />
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sponsors
