import React from 'react'

const DisplayTracks = ({track, chooseTrack}) => {
    
    const handlePlay = () => {
        chooseTrack(track)
    }

    
  return (
        <div> 
            <img src={track.album.images[1].url} alt="Album Cover" style={{height: "70px", width: "70px"}}></img>
            <p onClick={handlePlay}>{track.name} - {track.artists[0].name.toString()}</p>
        </div>
  )
}

export default DisplayTracks