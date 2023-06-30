import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const DisplayTracks = ({track, chooseTrack}) => {
    
    const handlePlay = () => {
        chooseTrack(track);
    }

    
  return (
        <List
            sx={{
                width: '60vw',
                bgcolor: '#f7a6f4',
                borderRadius: "12px",
                marginBottom: "10px",
            }}
            >
            <ListItem onClick={handlePlay}>
                <ListItemAvatar>
                <Avatar style={{height: "100px", width: "100px", marginRight: "20px"}}>
                    <img src={track.album.images[1].url} alt="Album Cover"></img>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={track.name} 
                secondary={track.artists[0].name.toString()} 
                style={{ fontFamily: 'Raleway' }} />
            </ListItem>
            </List>
  )
}

export default DisplayTracks