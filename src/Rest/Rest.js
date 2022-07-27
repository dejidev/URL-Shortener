import React from 'react';
import './rest.css';
import brand from '../images/icon-brand-recognition.svg';
import detail from '../images/icon-detailed-records.svg';
import customize from '../images/icon-fully-customizable.svg';

const Rest = () => {
  return (
    <main>

        <div className="rod"></div>
      
        <section className="advanced">
            <h2> Advanced Statistics</h2>
            <p className='pe'>    Track how your links are performing across the web with our
                   advanced statistics dashboard.</p>
        </section>

        <section className='box'>

            <article>
                <div className="con">
                    <img src={brand} alt="brand" className='icon' />
                    <h3 className='hh'>Brand Recognition</h3>
                    <p className="pe">
                            Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.
                    </p>                    
                </div>

            </article>

            <article id='con-2'>
                <div className="con">
                    <img src={detail} alt="" className="icon"  />
                    <h3 className='hh'>Detailed Records</h3>
                    <p className="pe">
                            Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.
                    </p>                    
                </div>

            </article>

            <article id='con-3'>
                <div className="con" >
                    <img src={customize} alt="" className="icon" />
                    <h3 className='hh'>Fully Customizable</h3>
                    <p className="pe">
                            Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.
                    </p>                    
                </div>

            </article>



        </section>




    </main>
  )
}

export default Rest


