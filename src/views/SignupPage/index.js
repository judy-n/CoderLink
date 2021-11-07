import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserEntity from '../../model/User';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        username: '',
        password: '',
        age: -1,
        pronouns: '',
        about: '',
        institution: '',
        skills: ''
    }

    handleSubmit() {
        const newUser = new UserEntity(this.state.username, this.state.password);
        newUser.addInformation(
            this.state.name,
            this.state.age,
            this.state.pronouns,
            this.state.about,
            this.state.skills.split(', '),
            this.state.institution
        )
        this.props.handleSignup(newUser);
    }

    render() {
        return(
            <div className='signup-page-container'>
                <h2>Welcome! Sign up as a new user</h2>
                <form className='signup-form'>
                    <TextField
                        variant="outlined"
                        label="Full name"
                        onChange={(e) => this.setState({name: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="Username"
                        onChange={(e) => this.setState({username: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="password"
                        type='password'
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                    <div className='field-short'>
                        <TextField
                            variant="outlined"
                            label="age"
                            onChange={(e) => this.setState({age: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            label="Pronouns"
                            onChange={(e) => this.setState({pronouns: e.target.value})}
                        />
                    </div>
                    <TextField
                        variant="outlined"
                        label="about"
                        multiline
                        rows={6}
                        onChange={(e) => this.setState({about: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="Institution"
                        onChange={(e) => this.setState({institution: e.target.value})}
                    />
                    <TextField
                        variant="outlined"
                        label="Skills"
                        onChange={(e) => this.setState({skills: e.target.value})}
                    />
                    <Button
                        variant="contained"
                        className="about-btn green"
                        type="submit"
                        onClick={this.handleSubmit.bind(this)}
                    >
                        <Link to='/login'>
                            Submit
                        </Link>
                    </Button>
                </form>
            </div>
        );
    }
}

export default SignupPage;