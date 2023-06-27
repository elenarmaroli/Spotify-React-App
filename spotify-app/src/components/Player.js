import React, { useContext, useEffect, useState } from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
import SpotifyAppContext from '../context/SpotifyAppContext'

const Player = ({trackUri}) => {

    const {token} = useContext(SpotifyAppContext)

    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    //console.log(trackUri);

    return <SpotifyPlayer token={token}   play={play} uris={trackUri ? [trackUri] : []}
    callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
    />

}

export default Player