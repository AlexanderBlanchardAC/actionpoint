import React from 'react';
import './hero.css';
import { heroData } from '../../data';

const Hero = () => {

    const { image, text  } = heroData;

  return (
    <div className="heroContainer">
      <img src={image} className='heroImage' alt='Action Point Building' />
      <p className="heroText">{text}</p>
    </div>
  )
}

export default Hero
