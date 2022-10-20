import React, { useState, useEffect } from 'react'

export const TrackContext = React.createContext({});
export const TrackProvider = ({children}) => {

  const [tracks, setTracks] = useState([])
  const [favorite, setFavorite] = useState(() => {
    const jsonValue = window.localStorage.getItem('favorite_song')
    if(jsonValue) {
      return JSON.parse(jsonValue)
    }

    return []
  })
  
  const [heading ,setHeading] = useState('Top Tracks of The Day')
  const key = 'cd0dd1f930789173fd3141a9d435a362'
  
  useEffect(() =>{
    fetch(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=8&country=us&f_has_lyrics=1&apikey=${key}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.message.body.track_list)
      setTracks(data.message.body.track_list)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <TrackContext.Provider
      value={{
        tracks,
        heading,
        favorite,
        setTracks,
        setHeading,
        setFavorite
      }}
    >
        {children}
    </TrackContext.Provider>
  )
}
