import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './NavBar/Navbar';
import Intro from './Intro/Intro';
import Link from './Link/Link';
import Rest from './Rest/Rest';
import Foooter from './Footer/footer';
import backg from './images/bg-shorten-desktop.svg'

function App() {
  const [links, setLink] = useState('')
  const [short, setShort] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(links)
    setLink('')
    if (links.length){
      fetchData();
    }
  } 

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${links}`);
      setShort(res.data.result.full_short_link)
      setLoading(false)
    } catch (error) {
      
    }
  }


  // useEffect ( () => {
  //   if (links.length){
  //     fetchData();
  //   }
  // }, [links])

   return (

    <>
    <Navbar/>
    <Intro/>

    <div className='two'>
     <article className="mid" 
         style={{ backgroundImage: `url(${backg}) `}} 
      >
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={links} onChange={(e) => setLink(e.target.value)} 
            placeholder='Shorten link here...'/>
          <button type="submit">Submit</button>
        </form>
     </article>

      {/* <h3>Short Link</h3>
      {loading ? <div className="loader-5 center"><span></span></div> : <p>{short}</p>} */}

    </div>

    <Rest/>
    <Foooter/>

    </>

  );
}

export default App;
