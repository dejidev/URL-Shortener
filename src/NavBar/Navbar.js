import React, {useState} from 'react';
import logo from '../images/logo.svg';
import './navbar.css';
import { FaBars , FaTimes} from 'react-icons/fa';


const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const toggler = () => {
    setToggle(() => !toggle)
  }

  return (

    <>
      <nav>
        <section>
          <img src={logo} alt="shorty" />  
          <div className="toggle-btn" onClick={toggler}>
            {toggle? <FaTimes/> : <FaBars/> }           
          </div>
 
        </section>

        <div className={`${toggle?'links-container show-container' : 'links-container'} 'mobile'`} >
            <ul className='links'>
                <p className='feature'>Feature</p>
                <p>Pricing</p>
                <p>Resources</p>
            </ul>
            <hr style={{margin: '20px'}}/>
            <ul className='nav-btn'> 
                <p className='login'>Login</p>
                <p className='signup'>Sign Up</p>
            </ul>
        </div>

      </nav>

      {/* {
        toggle && (

            <div className='dropdown'>
            <ul>
                <li>Feature</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>

            <ul>
                <button>Login</button>
                <button>Sign Up</button>
            </ul>
        </div>
        )
      } */}


      </>
  )
}

export default Navbar
