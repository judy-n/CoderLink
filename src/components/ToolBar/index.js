import React from "react";
import './style.css';
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

class ToolBar extends React.Component {
    render() {
        const { addPost } = this.props;
        return (
            <div className='toolBar-container'>
                <div className='toolBar'>
                    <Button variant='contained' className='about-btn blue' onClick={() => {addPost('name', 'project title', 'project description', 'institution', ['skill'])}}>
                        New Post
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