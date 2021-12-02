import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import PostEntity from '../../../../model/Post';

class NewPostPage extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        title: '',
        descriptionShort: '',
        descriptionFull: '',
        skillsRequired: '',
    }

    handleSubmit(event) {
        event.preventDefault();
        // const newPost = new PostEntity(this.props.currentUser.username);
        // newPost.addInformation(
        //     this.state.title,
        //     this.state.descriptionShort,
        //     this.state.descriptionFull,
        //     this.props.currentUser.institution,
        //     this.state.skillsRequired.split(", ")
        // );
        // this.props.addPost(newPost);
    }
    
    render() {
        return(
            <div className='new-post-form-container'>
                <Header/>
                <h2>Create a new post</h2>
                <form className='new-post-form'>
                    <TextField
                        variant="outlined"
                        label="Project title"
                        onChange={(e) => this.setState({title: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="Short description"
                        onChange={(e) => this.setState({descriptionShort: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="Full description"
                        multiline
                        rows={6}
                        onChange={(e) => this.setState({descriptionFull: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="Skills required"
                        onChange={(e) => this.setState({skillsRequired: e.target.value})}
                        helperText='Separate with ", "'
                    />
                    <Button
                        variant="contained"
                        className="about-btn green"
                        type="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >
                        <Link to='/home'>
                            Create Post
                        </Link>
                    </Button>
                </form>
            </div>
        );
    }
}

export default NewPostPage;