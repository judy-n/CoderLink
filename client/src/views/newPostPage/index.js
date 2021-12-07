import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


class NewPostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            title: '',
            description: '',
            skillsRequired: '',
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser !== prevProps.currentUser) {
          this.setState({currentUser: this.props.currentUser})
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if ((this.state.title.length > 0) && (this.state.description.length > 0) && (this.state.skillsRequired.length > 0) ) {
        this.props.addPost(this.state.currentUser.username, this.state.title, this.state.description, 
            this.state.currentUser.institution, this.state.skillsRequired.split(","))
        } 
    }
    
    render() {
        return(
            <div className='new-post-form-container'>
                <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            currentUsername={this.props.currentUsername}
            />
                <h2>Create a new post</h2>
                <hr/>
                <form className='new-post-form'>
                    <Link to='/home' id="close-btn">
                        <IconButton>
                            <CloseIcon/>
                        </IconButton>
                    </Link>
                    <TextField 
                        required
                        variant="outlined"
                        label="Project title"
                        onChange={(e) => this.setState({title: e.target.value})}
                    />
                    <TextField
                        required
                        variant="outlined"
                        label="Description"
                        multiline
                        rows={6}
                        onChange={(e) => this.setState({description: e.target.value})}
                    />
                    <TextField
                        required
                        variant="outlined"
                        label="Skills required"
                        onChange={(e) => this.setState({skillsRequired: e.target.value})}
                        helperText='Separate with ", "'
                    />
                    <Button
                        variant="contained"
                        className="about-btn green"
                        id="post-btn"
                        type="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >
                        <Link to='/home'>
                            Post
                        </Link>
                    </Button>
                </form>
            </div>
        );
    }
}

export default NewPostPage;