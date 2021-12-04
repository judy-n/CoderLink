import React from 'react'
import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './style.css'
// import UserEntity from '../../../model/User';
import { Link } from 'react-router-dom';

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            username: this.props.currentUser.username,
            name: this.props.currentUser.fullname,
            about: this.props.currentUser.about,
            institution: this.props.currentUser.institution,
            skills: this.props.currentUser.skills,
        }

    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser != this.props.currentUser) {
            this.setState({
                currentUser: this.props.currentUser,
                username: this.props.currentUser.username,
                name: this.props.currentUser.fullname,
                about: this.props.currentUser.about,
                institution: this.props.currentUser.institution,
                skills: this.props.currentUser.skills,
                })
        }
    }

    async handleSubmit(event) {
        console.log("editprofile passes in:", this.state.username, this.state.name, this.state.about, 
        this.state.skills, this.state.institution)
        await this.props.editProfile(this.state.username, this.state.name, this.state.about, 
            this.state.skills, this.state.institution)
    }

    render() { 
        return (
        
        
        <div className="edit-profile-form-container">
            <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            />

            <h2>Edit Profile</h2>

            <div className="edit-profile-form">
            

            <TextField
            id="outlined-helperText"
            label="Full name"
            defaultValue={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
            />

            <TextField
            id="outlined-helperText"
            label="Username"
            defaultValue={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})}
            />      

            <TextField
            id="outlined-helperText"
            label="Bio"
            defaultValue={this.state.about}
            onChange={(e) => this.setState({about: e.target.value})}
            />  

            <TextField
            id="outlined-helperText"
            label="Institution"
            defaultValue={this.state.institution}
            onChange={(e) => this.setState({institution: e.target.value})}
            />  

            <TextField
            id="outlined-helperText"
            label="Skills"
            defaultValue={this.state.skills}
            helperText="Comma seperated"
            onChange={(e) => this.setState({skills: e.target.value.split(",")})}
            />  

            <Button
            variant='contained'
            type='submit'
            onClick={this.handleSubmit.bind(this)}
            > Save
            </Button>
            
            <Button 
            variant='contained'>
            <Link to='/profile'>Go back
                 </Link>
            </Button>
            
           
            
           





            </div>








        </div>
        );
    }
}
 
export default EditProfile;