import React, { useEffect, useState } from 'react'

const Player = ({id}) => {

    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [id])

    return <iframe title='Player' 
    style={{borderRadius: "12px"}}
    src={`https://open.spotify.com/embed/track/${id}`}
    width="100%" 
    height="352"
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
    ></iframe>

}

export default Player