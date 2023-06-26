import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import SpotifyAppContext from '../context/SpotifyAppContext';
import SearchTrack from './SearchTrack';


const LogIn = () => {

    const {token, setToken} = useContext(SpotifyAppContext);

    const CLIENT_ID = "44e7e430a6734159a03a2de27e6fb7a5"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
  
  
    useEffect (() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
  
      if (!token && hash) {
        token = hash.substring(1).split("&").find(item => item.startsWith("access_token")).split("=")[1]
  
        window.location.hash = ""
        window.localStorage.setItem("token", token)
      }

      setToken(token)

  
    }, [])
  
    const logoutHandler = () => {
        setToken("")
        window.localStorage.removeItem("token");
    }


  return (
    <div>

        <h1>Spotify React</h1>

        {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button onClick={logoutHandler}>Log out</button>}

        {token ?
            <SearchTrack/>
        :   <h2>Please login.</h2>
        }

    </div>
  )
}

export default LogIn