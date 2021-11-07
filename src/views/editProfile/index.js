import React from 'react'
import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './style.css'


class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: this.props.username,
            name: this.props.name,
            bio: this.props.bio,
            institution: this.props.institution,
            skills: this.props.skills,
        }

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
            />

            <TextField
            id="outlined-helperText"
            label="Username"
            defaultValue={this.state.username}
            />      

            <TextField
            id="outlined-helperText"
            label="Bio"
            defaultValue={this.state.bio}
            />  

            <TextField
            id="outlined-helperText"
            label="Institution"
            defaultValue={this.state.institution}
            />  

            <TextField
            id="outlined-helperText"
            label="Skills"
            defaultValue={this.state.skills}
            helperText="Comma seperated"
            />  

            <Button
            variant='contained'
            > Save



            </Button>




            </div>








        </div>
        );
    }
}
 
export default EditProfile;