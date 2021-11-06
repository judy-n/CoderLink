import React from 'react';
import "./style.css";
import Header from "../../components/Header";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
        console.log(this.state)
    }

    render() {
        return(
            <div className='new-post-form-container'>
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
                    />
                    <Button
                        variant="contained"
                        className="about-btn green"
                        type="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >
                        Create Post
                    </Button>
                </form>
            </div>
        );
    }
}

export default NewPostPage;