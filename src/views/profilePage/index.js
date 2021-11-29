
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
        this.state = { // we will load data into state variables
        // username: "judy-n",
        // name: "Judy Naamani",
        // bio: "Hi I'm a silly goose!",
        // institution: "University of Toronto",
        // skills: ["Python", "Java"],
        // // postList: this.state.UserPostList
        username: this.props.username,
        name: this.props.name,
        bio: this.props.bio,
        institution: this.props.institution,
        skills: this.props.skills
    }
}



    render() { 
        return (
        <div className="profilePage">
            <Header/>
        
        <span className="user"><h1>@{this.state.username}</h1></span>
        
        
        <div className='ProfileCard'>
            {/* Profile pic */}
            <img src={profilepic} alt=""></img>
            <div className='ProfileAbout'>
                <h3>Name: <span className="ProfileContent">{this.state.name}</span></h3>
                <h3>Bio: <span className="ProfileContent">{this.state.bio}</span></h3>
                <h3>Institution: <span className="ProfileContent">{this.state.institution}</span></h3>
                <h3>Skills: {this.state.skills.map((skill, i) => <span className="ProfileBadge" key={i}>{skill}</span>)}</h3>
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
            username={this.state.username}
            projectTitle = 'RPG Game'
            description='Need someone proficient in C++ for my open world rpg game project'
            skills ={["C++", "Unreal Engine"]}
            banner={pixel}
            institution = {this.state.institution}
            />

            <PostThumbnail
            username={this.state.username}
            projectTitle = 'Recommender system for cafes'
            description = "Building a recommender system to recommend cafes based on the users' favorite restaurants. Looking for someone with experience working with blah blah"
            skills = {["Python", "Neural networks"]}
            institution = {this.state.institution}
            banner={coffee}
            />

            <PostThumbnail
            username={this.state.username}
            projectTitle = 'RPG Game'
            description='Need someone proficient in C++ for my open world rpg game project'
            skills ={["C++", "Unreal Engine"]}
            banner={pixel}
            institution = {this.state.institution}
            />  
            </div>    

                
        </div>
        );
    }
}
 
export default Profile;