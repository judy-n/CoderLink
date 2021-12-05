import React from "react";
import './style.css';
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import PostEntity from "../../../model/Post";
import { Link } from "react-router-dom";

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='toolBar-container'>
                <div className='toolBar'>
                    <Button variant='contained' className='about-btn blue'>
                        {
                            (this.props.loggedIn) &&
                            <Link to='/newPostPage'>
                                New Post
                            </Link>
                        }
                        {
                            (!this.props.loggedIn) &&
                            <Link to='/login'>
                                New Post
                            </Link>
                        }
                    </Button>
                    <TextField
                        id='outlined-start-adornment'
                        label='Search'
                        InputProps={{
                            startAdornment: <InputAdornment position='start'>
                                <SearchIcon/>
                            </InputAdornment>
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default ToolBar;