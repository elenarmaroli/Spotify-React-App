import React, { useState } from 'react';
import SpotifyAppContext from './SpotifyAppContext';

const SpotifyAppProvider = ({ children }) => {
  
    const [token, setToken] = useState("");

    const [searchKey, setSearchKey] = useState("");
    

  return (
    <SpotifyAppContext.Provider value={{token, setToken, searchKey, setSearchKey}}>
      {children}
    </SpotifyAppContext.Provider>
  );
};

export default SpotifyAppProvider;