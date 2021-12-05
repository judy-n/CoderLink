
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
import PostCard from '../../components/PostCard'

import { getUserPosts } from '../../actions/post';

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
        currentUser: this.props.currentUser,
        userPosts: []
    }
}

async componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.setState({currentUser: this.props.currentUser})
      const posts = await getUserPosts(this.props.currentUser.username)
      this.setState({userPosts: posts})
      console.log(this.state.userPosts)
    }
}

async componentDidMount() {
    const posts = await getUserPosts(this.props.currentUser.username)
    this.setState({userPosts: posts})
}

    render() { 
        return (
        <div className="profilePage">
            <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            />
        
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
                  </div>
                  
                </div>
            </div>
        </div>

        <span className="user"><h1>Posts</h1></span> 
        <div className='userPosts'>
            {this.state.userPosts.slice(0).reverse().map((post) => {
              return (
              <PostThumbnail
                  id={post._id}
              username={post.author}
              projectTitle={post.title}
              description={post.description}
              skills={post.skillsRequired}
              banner={pixel}
              institution={post.institution}
              />
              );
            })}            
            </div>    

                
        </div>
        );
    }
}
 
export default Profile;