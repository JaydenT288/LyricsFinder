import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './css/FavoriteItem.css'

const FavoriteItem = ({artist_name, track_name, album_name, track_id, favorite, setFavorite}) => {
  
  const deleteHandler = () =>{
    setFavorite(favorite.filter(item => item.track_id !== track_id))
    window.localStorage.setItem('favorite_song', JSON.stringify(favorite.filter(item => item.track_id !== track_id)))
  }
  
  return (
    <div className='container'>
        <div className='favorite-card'>
            <i 
                id='delete' 
                className="fa-solid fa-xmark fa-xl"
                onClick={deleteHandler}
            >
            </i>
            <div className='favorite-card-content'>
                <h3>{artist_name}</h3>
                <div className='favorite-album-container'>
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
                        className='favorite-lyric-button'>
                        View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavoriteItem