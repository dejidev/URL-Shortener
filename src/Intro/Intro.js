import React from 'react';
import './intro.css';
import working from '../images/illustration-working.svg'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-txt">
            <h1>More than Just Shorter Links</h1>
            <h4>Build your brand recognition and get detailed insights on how th links are performing</h4>
            <button className='started'>Get Started</button>
        </div>

        <div className="img">
            <img src={working} alt="working-boy" />
        </div>


    </div>
  )
}

export default Intro
