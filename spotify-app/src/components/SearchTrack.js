import React, { useState } from 'react'
import SpotifyAppContext from '../context/SpotifyAppContext';
import { useContext } from 'react';
import axios from 'axios';


const SearchTrack = () => {

    const {token, searchKey, setSearchKey} = useContext(SpotifyAppContext);

    const [tracks, setTracks] = useState([]);

    const searchClickHandler = async (e) => {
        e.preventDefault();

        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setTracks(data.tracks.items)

        console.log(data);
    }

    const renderTracks = () => {

        return tracks.map((track) => {
        return <div key={track.id}>
            {track.name}
            </div>
        })
    }

  return (
    <div>
        <form onSubmit={searchClickHandler}>
        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
        <button type='sumbit'>Search</button>
        </form>

        {tracks.length > 0 && 
        renderTracks()}
    </div>
  )
}

export default SearchTrack