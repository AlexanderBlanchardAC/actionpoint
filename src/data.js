import heroImage from './assets/heroImage.png';
import logo from './assets/logo.png'
import bradford from './assets/sponsors/bradford.gif';
import lottery from './assets/sponsors/lottery.jpg';
import morrisons from './assets/sponsors/morrisons.jpg';
import asda from './assets/sponsors/asda.png';
import disabilityConfident from './assets/disabilityConfident.png';
import royal from './assets/sponsors/royal.jpg';
import cnet from './assets/sponsors/cnet.svg';
import keighley from './assets/sponsors/keighley.png';
import bailyThomas from './assets/sponsors/bailyThomas.png';
import justGiving from './assets/justGiving.png';
import justGivingQR from './assets/justGivingQR.png';
import { BsFacebook, BsTwitter } from 'react-icons/bs';

export const navbarData = {
    items:[
        {name: 'About Us', subMenu: [
            {title: 'About Us'},
            {title: 'Projects & Services'},
            {title: 'Our Facilities'}
        ]},
        {name: 'Projects', link: '/projects'},
        {name: 'Volunteering'},
        {name: 'Facilities', link: '/facilities'},
        {name: 'What\'s On', link: '/events'},
        {name: 'Contact Us', link: '/contact'}
    ]
}

export const aboutSubMenu = {
    aboutItems: [
        {name: 'About Us', link: '/about'},
        {name: 'Projects & Services', link: '/projectsandservices'},
        {name: 'Our Facilities', link: '/facilities'}
    ]
}

export const volunteerSubMenu = {
    volunteerItems: [
        {name: 'Volunteering', link: '/volunteering'},
        {name: 'Supported Volunteering (LD)', link: '/supportedvolunteering'},
        {name: 'Volunteer Brokerage', link: '/brokerage'},
        {name: 'DBS Service', link: '/dbs'},
        {name: 'Good Practice', link: '/goodpractice'}
    ]

}



export const heroData = {
    image: heroImage,
    text: 'Together we can make a difference'
}

export const footerData = {
   phone: '01535 609506',
   email: 'admin@actionpoint.uk',
   addressLineOne: 'Action Point',
   addressLineTwo: 'The Temple Row Centre',
   addressLineThree: '23 Temple Row',
   addressLineFour: 'Keighley',
   postcode: 'BD21 2AH',
   facebook: <BsFacebook className='facebookIcon'/>,
   twitter: <BsTwitter className='twitterIcon'/>,
   facebookLink: 'https://www.facebook.com/actionpoint.keighley',
    
    
}

export const homeData = {
    homeHeader: 'Action Point',
    paragraphs: [
        {index: 1, text: 'Action Point Community Support Services is a registered charity providing services to individuals and voluntary organisations from Keighley & surronding areas.'},
        {index: 2, text: 'Our aim is to make a difference by supporting people to lead happy, safe and fulfilled lives.'},
        {index: 3, text: 'Volunteers are at the heart of our services, so if you would like to make a real difference to your local community JOIN US and volunteer with one of our fabulous projects.'}
    ],
    disabilityConfidentImg: disabilityConfident
}

export const sponsorsData ={
    sponsorsHeader: 'Thanks to our funders for their supporting work!',
    sponsors:[
        {name: 'City of Bradford', image: bradford},
        {name: 'Lottery', image: lottery},
        {name: 'Morrisons Foundation', image: morrisons},
        {name: 'Asda', image: asda},
        {name: 'Royal Yorkshire', image: royal},
        {name: 'CNET', image: cnet},
        {name: 'Keighley', image: keighley},
        {name: 'Baily Thomas', image: bailyThomas}
    ]
}

export const justGivingData = {
    header: 'If you would like to support our work by making a donation, you can do so by going to our Just Giving page.',
    justGivingLogo: justGiving,
    logoLink: 'https://donate.justgiving.com/donation-amount?uri=aHR0cHM6Ly9kb25hdGUtYXBpLmp1c3RnaXZpbmcuY29tL2FwaS9kb25hdGlvbnMvMzNjYzM4NTdjNGRmNDJkOGI0Nzc1MTYwNDUwZWZmYjk/aXNDaGVja291dEFwaT1mYWxzZQ==',
    qr: justGivingQR
}