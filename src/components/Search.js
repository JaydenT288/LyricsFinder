import React, { useContext, useState } from 'react'
import './css/Search.css'
import { TrackContext } from '../TrackContext'

const Search = () => {

  
  const [ title, setTitle ] = useState('')
  const { setTracks, setHeading } = useContext(TrackContext)
  const key = 'cd0dd1f930789173fd3141a9d435a362'

  const setTitleHandler = e =>{
    setTitle(e.target.value)
  }
  

  const findTrackHandler = e =>{
    e.preventDefault();
    // console.log(title)
    fetch(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${title}&page_size=8&s_track_rating=desc&apikey=${key}`)
    .then(res => res.json())
    .then(data =>{
        // console.log(data.message.body.track_list)
        setTracks(data.message.body.track_list)
        setHeading('Search Results')
    })
    .catch(err => console.log(err))
    setTitle('')
  }

  return (
    <div className='search-container'>
        <div className='input-container'>
            <i className="fa-solid fa-music fa-2xl"></i>
            <h1>Search for Lyrics</h1>
        </div>
        <form 
            className='form-container'
            onSubmit={e => findTrackHandler(e)}
        >
            <input 
                placeholder='Search by Track Name...'
                type='text'
                value={title}
                onChange={e => setTitleHandler(e)}
            />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Search