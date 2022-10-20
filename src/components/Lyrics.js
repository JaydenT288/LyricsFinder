import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import './css/Lyrics.css'

const Lyrics = () => {

  const [tracks, setTracks] = useState({})
  const [lyrics, setLyrics] = useState({})
  const track_id = useParams()
  const key = 'cd0dd1f930789173fd3141a9d435a362'

  useEffect(() =>{
    fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id.id}&apikey=${key}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data.message.body)
        setLyrics(data.message.body.lyrics)

        return fetch(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${track_id.id}&apikey=${key}`)
    })
    .then(res => res.json())
    .then(data =>{
        // console.log(data.message.body)
        setTracks(data.message.body.track)
    })
    .catch(err => console.log(err))  
  }, [])

  if (Object.keys(tracks).length === 0 || Object.keys(lyrics).length === 0){
    return ( <Spinner />)
  }else{
    return (
        <div className='lyrics-container'>
            <Link 
                to='/'
                className='back-btn'
            >
                <i className="fa fa-arrow-left fa-sm"></i>Back    
            </Link>
            <div className='content-container'>
                <div className='header'>
                    {tracks.track_name} by: {tracks.artist_name}
                </div>
                <div className='lyrics'>
                    <p>{lyrics.lyrics_body}</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Lyrics