import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Redirect } from 'react-router';
import Header from "../../components/Header";

class SignupPage extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        fullname: '',
        username: '',
        password: '',
        about: '',
        institution: '',
        skills: '',
        github: '',
        linkedin: '',
        valid: true
    }

    handleSubmit(e) {
        e.preventDefault()
        if (!this.state.username == '' && !this.state.password == '' && !this.state.fullname == '' && !this.state.institution=='') {
            this.props.handleSignup(this.state.username, this.state.password, this.state.fullname, this.state.about,
                this.state.skills, this.state.institution, this.state.github, this.state.linkedin);
            window.location.href= "/login"
        } else {
            this.setState({valid: false})
        }
    }


    render() {
        return(
            <div className='signup-page-container'>
                <Header
                    handleLogout={this.props.handleLogout}
                    loggedIn={this.props.loggedIn}
                    currentUsername={this.props.currentUsername}
                />
                <h2>Welcome! Sign up as a new user</h2>
                <hr/>
                <form className='signup-form'>
                    {!this.state.valid && (
                        <Alert severity="error" className={"fail-alert"}>
                            <AlertTitle>Error</AlertTitle>
                            Please fill all the required fields!
                        </Alert>
                    )}

                    <TextField
                        required
                        variant="outlined"
                        label="Full name"
                        onChange={(e) => this.setState({fullname: e.target.value})}
                    />
                    <TextField
                        required
                        variant="outlined"
                        label="Username"
                        onChange={(e) => this.setState({username: e.target.value})}
                    />
                    <TextField
                        required
                        variant="outlined"
                        label="password"
                        type='password'
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="about"
                        multiline
                        rows={6}
                        onChange={(e) => this.setState({about: e.target.value})}
                    />
                    <TextField
                        required
                        variant="outlined"
                        label="Institution"
                        onChange={(e) => this.setState({institution: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="Skills"
                        onChange={(e) => this.setState({skills: e.target.value})}
                        helperText='Separate with ", "'
                    />
                    <TextField
                        variant="outlined"
                        label="GitHub URL"
                        onChange={(e) => this.setState({github: e.target.value})}
                    />

                    <TextField
                        variant="outlined"
                        label="LinkedIn URL"
                        onChange={(e) => this.setState({linkedin: e.target.value})}
                    />

                            <Button
                                variant="contained"
                                className="about-btn green"
                                type="submit"
                                onClick={this.handleSubmit.bind(this)}
                            >Submit
                            </Button>


                </form>
            </div>
        );
    }
}

export default SignupPage;