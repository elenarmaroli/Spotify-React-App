import React, { useEffect, useState } from 'react'

const Player = ({id}) => {

    return <iframe title='Player' 
    style={{borderRadius: "8px", position: "sticky", bottom: "-50px", left: "22%", border: "0px"}}
    src={`https://open.spotify.com/embed/track/${id}`}
    width="1000px" 
    height="150"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy"
    ></iframe>

}

export default Player