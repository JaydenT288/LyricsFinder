import React, { useContext } from 'react'
import { TrackContext } from '../TrackContext'
import FavoriteItem from './FavoriteItem'

const Favorite = () => {

  const { favorite, setFavorite } = useContext(TrackContext)
  return (
    <div className='container'>
        <h3 style={{textAlign:'center', marginBottom:'10px'}}>My Favorite Songs</h3>
        <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
        {favorite.map((item, index) =>(
            <div key={index}>
                <FavoriteItem 
                artist_name={item.artist_name} 
                track_name={item.track_name} 
                album_name={item.album_name}
                track_id={item.track_id}
                favorite={favorite}
                setFavorite={setFavorite}
                />
            </div>
        ))}
        </div>
    </div>
  )
}

export default Favorite