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
        this.state = {
            currentUser: this.props.currentUser,
            title: '',
            description: '',
            skillsRequired: '',
        }
    }

    componentDidUpdate(prevProps) {
        // console.log("we updated", this.props, prevProps)
        if (this.props.currentUser !== prevProps.currentUser) {
          this.setState({currentUser: this.props.currentUser})
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addPost(this.state.currentUser.username, this.state.title, this.state.description, 
            this.state.currentUser.institution, this.state.skillsRequired.split(","))
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
                    {/* <TextField
                        variant="outlined"
                        label="Short description"
                        onChange={(e) => this.setState({descriptionShort: e.target.value})}
                    /> */}
                    <TextField
                        variant="outlined"
                        label="Description"
                        multiline
                        rows={6}
                        onChange={(e) => this.setState({description: e.target.value})}
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