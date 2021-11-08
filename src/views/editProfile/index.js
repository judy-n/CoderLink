import React from 'react'
import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './style.css'
import UserEntity from '../../model/User';
import { Link } from 'react-router-dom';

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
            username: this.props.currentUser.username,
            name: this.props.currentUser.name,
            bio: this.props.currentUser.bio,
            institution: this.props.currentUser.institution,
            skills: this.props.currentUser.skills.join(","),
        }

    }

    handleSubmit(event) {
        this.props.updateProfile(this.state.username, this.state.name, this.state.bio, this.state.institution, 
            this.state.skills.split(","))
    }

    render() { 
        return (
        
        
        <div className="edit-profile-form-container">
            <Header/>

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
            defaultValue={this.state.bio}
            onChange={(e) => this.setState({bio: e.target.value})}
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