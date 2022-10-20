import React from 'react'
import './css/Item.css'
import { Link } from 'react-router-dom'

const Item = ({artist_name, track_name, album_name, track_id, setFavorite, favorite}) => {

  const FavoriteHandler = () =>{
    if(favorite.filter(name => name.track_name === track_name).length !== 0){
        alert('This song is in your favorite list already')
        return
    }else{
        setFavorite([...favorite,
            {
                artist_name: artist_name,
                track_name: track_name,
                album_name: album_name,
                track_id: track_id
            }])
            
            window.localStorage.setItem('favorite_song', JSON.stringify([...favorite,
                {
                    artist_name: artist_name,
                    track_name: track_name,
                    album_name: album_name,
                    track_id: track_id
        }]))
    }
  }

  return (
    <div className='container'>
        <div className='card'>
            <i 
                id='heart' 
                className="fa-regular fa-heart fa-lg"
                onClick={FavoriteHandler}
            >
            </i>
            <div className='card-content'>
                <h3>{artist_name}</h3>
                <div className='album-container'>
                    <div className='items'>
                        <i className="fas fa-play"></i>Track: {track_name}
                    </div>
                    <div className='items'>
                        <i className="fas fa-compact-disc" />Album: {album_name}
                    </div>
                </div>
                <div className='btn-container'>
                    <Link 
                        to={`lyric/${track_id}`}
                        className='lyric-button'>
                        View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item