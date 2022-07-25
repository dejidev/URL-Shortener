import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './link.css'

const Link = () => {

  const [links, setLink] = useState('')
  const [short, setShort] = useState('')
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLink('')
    if (links.length){
      fetchData();
    }
  } 

  let lin = short ;

  setList([...list, lin])


  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${links}`);
      setShort(res.data.result.full_short_link)
    } catch (error) {
      
    }
  }

  return ( 
    <div>
      Hello URL Shortener

      <form onSubmit={handleSubmit}>
        <input type="text" value={links} onChange={(e) => setLink(e.target.value)} placeholder='enter'/>
        <button type="submit">Submit</button>
      </form>
      <h3>Short Link</h3>
      <h2>{links}   and  {short}</h2>
    </div>
  )
}

export default Link
