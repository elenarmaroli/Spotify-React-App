import React, { useState } from 'react'
import SpotifyAppContext from '../context/SpotifyAppContext';
import { useContext } from 'react';
import axios from 'axios';
import Player from './Player';
import DisplayTracks from './DisplayTracks';


const SearchTrack = () => {

    const {token, searchKey, setSearchKey} = useContext(SpotifyAppContext);

    const [tracks, setTracks] = useState([]);

    const [playingTrack, setPlayingTrack] = useState();


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
        //console.log(data);
    }

    const renderTracks = () => {

        const trackElements = tracks.map((track) => {

            return <DisplayTracks key={track.id} track={track} chooseTrack={chooseTrack}/>
            })

        return (<div>
            <h2>Search results:</h2>
            {trackElements}
        </div>)
    }

    const chooseTrack = (track) => {
        setPlayingTrack(track)
        setSearchKey("");
        console.log(track);
    }

    //console.log("token", token);

  return (
    <div>

        <form onSubmit={searchClickHandler}>
        <input type="text" placeholder='Search for a track or artist' onChange={e => setSearchKey(e.target.value)}/>
        <button type='sumbit'>Search</button>
        </form>

        {tracks.length > 0 && renderTracks()}

        {playingTrack &&
        <Player id={playingTrack?.id}/>}


    </div>
  )
}

export default SearchTrack