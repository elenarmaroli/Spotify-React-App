import React, { useContext } from 'react'
import { useEffect } from 'react'
import SpotifyAppContext from '../context/SpotifyAppContext';
import SearchTrack from './SearchTrack';


const LogIn = () => {

    const {token, setToken} = useContext(SpotifyAppContext);

    const CLIENT_ID = "44e7e430a6734159a03a2de27e6fb7a5";
    const REDIRECT_URI = "http://localhost:3000";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
  
  
    useEffect (() => {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");
  
      if (!token && hash) {
        token = hash.substring(1).split("&").find(item => item.startsWith("access_token")).split("=")[1];
  
        window.location.hash = "";
        window.localStorage.setItem("token", token);
      }

      setToken(token);

    }, [setToken])
  

    const logoutHandler = () => {
        setToken("");
        window.localStorage.removeItem("token");
    }


  return (
    <div className='header'>

        <h1>Spotify React App
        <i class="fa-brands fa-spotify" style={{color: "#1ed760;"}}></i>
        </h1>
        {!token ?
        <div>
          <h2 style={{marginBottom: "60px", marginTop: "200px"}}>Please login:</h2>
          <a className='login-btn' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        </div> :
    
        <div className='search-field'>
          <SearchTrack/>
          <button className='logout-btn' onClick={logoutHandler}>Log out here</button>
        </div>
        }


    </div>
  )
}

export default LogIn