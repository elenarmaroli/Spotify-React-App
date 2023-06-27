import React, { useContext } from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
import SpotifyAppContext from '../context/SpotifyAppContext'

const Player = ({trackUri}) => {

    const {token} = useContext(SpotifyAppContext)

    return <SpotifyPlayer
    token={token}
    uris={[trackUri]}
    />
}

export default Player