import React from 'react'
import { TrackContext } from '../TrackContext'
import Item from './Item'
import Spinner from './Spinner'

const Track = () => {

  const { tracks, heading, favorite, setFavorite} = React.useContext(TrackContext)


  return (
   tracks.length === 0 ? <Spinner /> : (
    <>
    <div className='container'>
      <h3 style={{textAlign:'center', marginBottom:'4px'}}>{heading}</h3>
      <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>

        {tracks.map((item, index) =>(
          <div key={index}>
            <Item 
              artist_name={item.track.artist_name} 
              track_name={item.track.track_name} 
              album_name={item.track.album_name}
              track_id={item.track.track_id}
              favorite={favorite}
              setFavorite={setFavorite}
            />
          </div>
        ))}
      </div>
    </div>
    </>
   )
  )

}

export default Track