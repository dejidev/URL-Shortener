import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './NavBar/Navbar';
import Intro from './Intro/Intro';
import Link from './Link/Link';
import Rest from './Rest/Rest';
import Foooter from './Footer/footer';
import backg from './images/bg-shorten-desktop.svg';

function App() {
  const [links, setLink] = useState('')
  const [short, setShort] = useState('')
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [url, setUrl] = useState('')
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(links)
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
      setLoaded(true)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [isCopied])


   return (

    <>
    <Navbar/>
    <Intro/>

    <div className='two'>
  
      <div className='mid' style={{ backgroundImage: `url(${backg}) `}}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={links} onChange={(e) => setLink(e.target.value)} placeholder='Shorten a link here'/>
          <button type="submit">Shorten here!</button>
        </form>

      </div>

        {loading ? <div className="loader-5 center middle"><span></span></div> : ''}
        {loaded && <div className='short'><p className='url'>{url}</p><section> 
          <p>{short}</p>
          <button style ={{backgroundColor: isCopied ? 'hsl(260, 8%, 14%)' : '' }}onClick={() => {
        setIsCopied(true)
        navigator.clipboard.writeText(short)
      }}><span>{isCopied ? 'Copied!' : 'Copy'}</span></button></section> </div>}     
    </div>


    <Rest/>
    <Foooter/>

    </>

  );
}

export default App;
