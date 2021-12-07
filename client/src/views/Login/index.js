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
        this.props.handleLogin(this.state.username, this.state.password).then(res => {
            console.log("I'm here with res", res, "you should redirect me somewhere")
        })
    }

    render() { 
        return (
        <div className="loginPage">

            <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            currentUsername={this.props.currentUsername}
            />
            <h2>Welcome! Please Login</h2>
            <hr/>
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
                ? (<Redirect to='/home' />)
                : null
            }

        </div>
        
        
        );
    }
}
 
export default Login;