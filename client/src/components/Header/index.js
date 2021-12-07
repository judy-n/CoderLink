import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header(props){
        
        const [anchorEl, setAnchorEl] = React.useState(null);
      
        const handleMenu = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
        return (
            <navbar style={{width: "100%"}}>

<Box sx={{ flexGrow: 1 }} style={{marginBottom: "3rem"}}>
      <AppBar position="static" id="appbar">
        <Toolbar>
          <Typography variant="h5" id="sitetitle" component="div" sx={{ flexGrow: 1 }}>
            CoderLink
          </Typography>
          <Link to='/home'>
                <IconButton
                style={{color: "white"}}
                size="large"
                >
                <HomeIcon />
                </IconButton>
                </Link>
          {props.loggedIn && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                style={{color: "white"}}
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              > 
              <Link to={`/profile/${props.currentUsername}`} style={{ textDecoration: 'none' , color:"black"}}>
                <MenuItem>Profile</MenuItem> </Link>
                <Link to='/login' onClick={props.handleLogout} style={{ textDecoration: 'none' , color:"black"}}>
                <MenuItem onClick={handleClose}>Log out</MenuItem> </Link>
              </Menu>
              
            </div>
          )}
           {!props.loggedIn && (
           <div>
               <Link to='/login' style={{ textDecoration: 'none' , color:"white"}}>
               <Button color="inherit">Login</Button>
               </Link>
           </div>
           )}
        </Toolbar>
      </AppBar>
    </Box>

            </navbar>
        );
    }

