import React from 'react';
import './footer.css';
import back from '../images/bg-boost-desktop.svg';
import backmob from '../images/bg-boost-mobile.svg';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';

const footer = () => {


  return (
    <>
    
    <article className="foot1" style={{ backgroundImage: `url(${back}) `}}>

      <div>
        <h1>Boost your links today</h1>
        <button className='started'>Get Started</button>        
      </div>

    </article>

    <article className="foot2">

      <img src={logo} alt="logo" className='log'/>

      <div>
        <h3>Features</h3>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
      </div>


      <div>
        <h3>Resources</h3>
        <p>Blog</p>
        <p>Developers</p>
        <p> Support</p>
      </div>

      <div>
        <h3> Company</h3>
        <p>About</p>
        <p>Our Team</p>
        <p> Contact</p>
      </div>

      <div className="social">
        <img src={facebook} alt="facbook logo" />
        <img src={twitter} alt="twittr-logo"  />
        <img src={pinterest} alt="pinterest-logo" />
        <img src={instagram} alt="instagram-logo" />
      </div>
    </article>


    <div className="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</p> 
        <p> Coded by <a href="#">Ayodeji Adetayo</a></p> 
    </div>

    </>


  )
}

export default footer
