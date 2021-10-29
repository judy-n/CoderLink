import React from 'react';
import "./style.css";
import Header from "../../components/Header";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class Login extends React.Component {
    render() { 
        return (
        <div className="loginPage">
             <Header/>

        <h2>Welcome! Please login.</h2>
        <div className="loginForm">
            <TextField 
            required
            label="Username" id="filled-basic"
            />
            <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            />

            <Button onClick={() => {}} variant ="contained" className="loginButton">Login</Button>


        </div>
            

        </div>
        
        
        );
    }
}
 
export default Login;