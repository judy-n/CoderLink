import React from 'react'
import Header from "../../components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './style.css'
import { Link } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

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
            github: this.props.currentUser.github,
            linkedin: this.props.currentUser.linkedin,
            saved: false
        }

    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.setState({
                currentUser: this.props.currentUser,
                username: this.props.currentUser.username,
                name: this.props.currentUser.fullname,
                about: this.props.currentUser.about,
                institution: this.props.currentUser.institution,
                skills: this.props.currentUser.skills,
                github: this.props.currentUser.github,
                linkedin: this.props.currentUser.linkedin
                })
        }
    }

    componentDidMount() {
        this.setState({saved: false})
    }

    async handleSubmit(event) {
        console.log("editprofile passes in:", this.state.username, this.state.name, this.state.about, 
        this.state.skills, this.state.institution)
        await this.props.editProfile(this.state.username, this.state.name, this.state.about, 
            this.state.skills, this.state.institution, this.state.github, this.state.linkedin)
        // Success -> Show the alert
        this.setState({saved: true})
    }

    render() { 
        return (

        <div className="edit-profile-form-container">
            <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            currentUsername={this.props.currentUsername}
            />

            <h2>Edit Profile</h2>
            <hr/>

            <div className="edit-profile-form">
                <Link to={`/profile/${this.state.username}`} id="close-btn">
                    <IconButton>
                        <CloseIcon/>
                    </IconButton>
                </Link>
                {this.state.saved && (
                    <Alert severity="success" className={"success-alert"}>
                        <AlertTitle>Success</AlertTitle>
                        Profile saved!
                    </Alert>
                )}
            <TextField
            id="outlined-helperText"
            label="Full name"
            defaultValue={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
            />

            <TextField disabled
            id="outlined-disabled"
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

            <TextField
                    id="outlined-helperText"
                    label="GitHub URL"
                    defaultValue={this.state.github}
                    onChange={(e) => this.setState({github: e.target.value})}
            />



                <TextField
                    id="outlined-helperText"
                    label="LinkedIn URL"
                    defaultValue={this.state.linkedin}
                    onChange={(e) => this.setState({linkedin: e.target.value})}
                />


                <Button
            variant='contained'
            type='submit'
            onClick={this.handleSubmit.bind(this)}
            className="about-btn green"
            > Save
            </Button>



            </div>

        </div>
        );
    }
}
 
export default EditProfile;