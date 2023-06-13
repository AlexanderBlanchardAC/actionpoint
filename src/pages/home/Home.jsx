import React from 'react';
import './home.css';
import Hero from '../../components/hero/Hero';
import { homeData } from '../../data';
import Sponsors from '../../components/sponsors/Sponsors';
import JustGiving from '../../components/justGiving/JustGiving';
import { Link } from 'react-scroll';
// import heroImageHmm from '../../assets/heroImageHmm.jpg';

const Home = () => {
    const { homeHeader, paragraphs, disabilityConfidentImg } = homeData;

  return (
    <div className='homeContainer'>
        <div className="heroContainerDiv">
            <Hero />
        </div>
        <div className="homeAboutUs">
            <h1 className="homeAboutTitle">{homeHeader}</h1>
            <div className="homeAboutParas">
                {paragraphs.map((paragraph, index) => {
                    return(
                        <p className="homeAboutPara" key={index}>
                            {paragraph.text}
                        </p>
                    )
                })}
            </div>
            <img src={disabilityConfidentImg} className="disabilityConfidentLogo" alt='Disability Confident Logo' />
                
        </div>
        <div className="donations">
            <div className="sponsorsContainer">
                    <Sponsors />
            </div>
            <div className="justGiving">
                <JustGiving />
                <div className="toTopDiv">
                <Link to='heroContainer'>
                    <button className="toTop">Back to Top</button>
                </Link>
                <div className="charity">
                    <p className="charityInfo">ActionPoint 2022</p>
                    <p className="charityInfoTwo">Registered Charity No: 1090144</p>
                    </div>
            </div>
            </div>
           
        </div>























      
    </div>
  )
}

export default Home
