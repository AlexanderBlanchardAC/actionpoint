import React from 'react';
import './footerAddress.css';
import { footerData } from '../../data';
import { NavLink } from 'react-router-dom';

const FooterAddress = () => {
    const { facebookLink, facebook, twitter, phone, email, addressLineOne, addressLineTwo, addressLineThree, addreeLineFour, postcode } = footerData
  return (
    <div className='footerContainer'>
      
        <div className="footerInner">
            <div className="socialsFooter">
                <NavLink to={facebookLink}>
                    {facebook}
                </NavLink>
                {twitter}
            </div>
            <div className="contactFooter">
                <p className="phone">{phone}</p>
                <p className="email">{email}</p>
            </div>
            <div className="contactFooterAddress">
                <p className="addressOne">{addressLineOne}</p>
                <p className="addressTwo">{addressLineTwo}</p>
                <p className="addressThree">{addressLineThree}</p>
                <p className="addressFour">{addreeLineFour}</p>
                <p className="postcode">{postcode}</p>
            </div>
        </div>
    </div>
  )
}

export default FooterAddress
