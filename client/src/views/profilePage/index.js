
import React from 'react';
import "./styles.css";
import profilepic from "./static/default.jpeg"
import Button from '@mui/material/Button';
import Header from '../../components/Header';
import PostThumbnail from "../../components/PostThumbnail"
import pixel from './static/pixel.png'
import coffee from './static/coffee.jpg'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings';
import LinkK from '@mui/material/Link'
import { Link } from 'react-router-dom';
import EditProfile from '../editProfile';

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
        currentUser: this.props.currentUser
    }
}

componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.setState({currentUser: this.props.currentUser})
    }
}



    render() { 
        return (
        <div className="profilePage">
            <Header/>
        
        <span className="user"><h1>@{this.state.currentUser.username}</h1></span>
        
        
        <div className='ProfileCard'>
            {/* Profile pic */}
            <img src={profilepic} alt=""></img>
            <div className='ProfileAbout'>
                <h3>Name: <span className="ProfileContent">{this.state.currentUser.fullname}</span></h3>
                <h3>Bio: <span className="ProfileContent">{this.state.currentUser.about}</span></h3>
                <h3>Institution: <span className="ProfileContent">{this.state.currentUser.institution}</span></h3>
                <h3>Skills: {(this.state.currentUser.skills || []).map((skill, i) => <span className="ProfileBadge" key={i}>{skill}</span>)}</h3>
                <div className="about-buttons-profile">
                    <div>
                    <Button variant ="contained" className="about-btn blue">Connect</Button>
                  <Button href="portfolio" variant="contained" className="about-btn green">Portfolio</Button>
                    </div>

                  <div>
                    <Link to="/editProfile">
                  <IconButton
                  >

                  
                <SettingsIcon/> 
                </IconButton>
                </Link>
                {/* <Link to="/editProfile">meow</Link> */}
                  </div>
                  
                </div>
            </div>
        </div>

        <span className="user"><h1>Posts</h1></span> 
        <div className='userPosts'>
            <PostThumbnail
            username={this.state.currentUser.username}
            projectTitle = 'RPG Game'
            description='Need someone proficient in C++ for my open world rpg game project'
            skills ={["C++", "Unreal Engine"]}
            banner={pixel}
            institution = {this.state.currentUser.institution}
            />

            <PostThumbnail
            username={this.props.username}
            projectTitle = 'Recommender system for cafes'
            description = "Building a recommender system to recommend cafes based on the users' favorite restaurants. Looking for someone with experience working with blah blah"
            skills = {["Python", "Neural networks"]}
            institution = {this.props.institution}
            banner={coffee}
            />

            <PostThumbnail
            username={this.props.username}
            projectTitle = 'RPG Game'
            description='Need someone proficient in C++ for my open world rpg game project'
            skills ={["C++", "Unreal Engine"]}
            banner={pixel}
            institution = {this.props.institution}
            />  
            </div>    

                
        </div>
        );
    }
}
 
export default Profile;