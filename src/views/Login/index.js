import React from 'react';
import "./style.css";
import Header from "../../components/Header";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    state = {
        username: '',
        password: ''
    }

    handleLogin() {
        this.props.handleLogin(this.state.username, this.state.password);
    }

    render() { 
        return (
        <div className="loginPage">

            <Header/>
            <h2>Welcome! Please Login</h2>
            <div className="loginForm">
                <TextField 
                label="Username" id="filled-basic"
                onChange= {(e) => this.setState({username: e.target.value})}
                />
                <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                onChange= {(e) => this.setState({password: e.target.value})}
                />
                <div className='loginForm-buttons'>
                    <Button 
                        onClick={this.handleLogin}
                        variant ="contained" 
                        className="about-btn blue loginButton"
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        className='about-btn green signup-button'
                    >
                        <Link
                            to='/signup'
                        >
                            Sign Up
                        </Link>
                    </Button>
                </div>
            </div>
            {
                (this.props.loggedIn)
                ? (<Redirect push to='/' />)
                : null
            }

        </div>
        
        
        );
    }
}
 
export default Login;