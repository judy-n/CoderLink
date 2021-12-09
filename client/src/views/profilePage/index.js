
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
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

import { getUserPosts } from '../../actions/post';
import { getUser} from "../../actions/user";

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
        currentUser: null,
        userPosts: [],
        isMyProfile: false,
    }
}

async componentDidUpdate(prevProps) {
        if (this.props.match.params.username !== prevProps.match.params.username) {
            const user = await getUser(this.props.match.params.username)
            this.setState({currentUser: user})
            const posts = await getUserPosts(this.state.currentUser.username)
            this.setState({userPosts: posts})
            if (this.props.loggedInUser.username === this.state.currentUser.username) {
                console.log("Does this happen?")
                this.setState({isMyProfile: true})
            }
        }
}

async componentDidMount() {
    const user = await getUser(this.props.match.params.username)
    this.setState({currentUser: user})
    const posts = await getUserPosts(this.state.currentUser.username)
    this.setState({userPosts: posts})
    if (this.props.loggedInUser.username === this.state.currentUser.username) {
        console.log("Does this happen?")
        this.setState({isMyProfile: true})
    }
}

    render() { 
        return (
        <div className="profilePage">
            <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            currentUsername={this.props.currentUsername}
            />
        
        <span className="user"><h1>@{this.state.currentUser && this.state.currentUser.username || ''}</h1></span>
        
        
        <div className='ProfileCard'>
            {/* Profile pic */}
            <img src={profilepic} alt=""></img>
            <div className='ProfileAbout'>
                <h3>Name: <span className="ProfileContent">{this.state.currentUser && this.state.currentUser.fullname}</span></h3>
                <h3>Bio: <span className="ProfileContent">{this.state.currentUser && this.state.currentUser.about}</span></h3>
                <h3>Institution: <span className="ProfileContent">{this.state.currentUser && this.state.currentUser.institution}</span></h3>
                <h3>Skills: {(this.state.currentUser && this.state.currentUser.skills || []).map((skill, i) => <span className="ProfileBadge" key={i}>{skill}</span>)}</h3>
                <div className="about-buttons-profile">
                    <div>

                        {/*Show GitHub button if user has it in their profile*/}
                        {(this.state.currentUser && this.state.currentUser.github !== '') && (
                            <Link to={{ pathname: this.state.currentUser.github }} target="_blank">
                            <IconButton>
                                <GitHubIcon/>
                            </IconButton>
                            </Link>
                        )}

                        {/*Show LinkedIn button if user has it in their profile*/}
                        {(this.state.currentUser && this.state.currentUser.linkedin !== '') && (
                            <Link to={{pathname: this.state.currentUser.linkedin}} target="_blank">
                        <IconButton>
                            <LinkedInIcon/>
                        </IconButton>
                            </Link>
                        )}

                    </div>
                    {this.state.isMyProfile && (
                        <div>
                            <Link to="/editProfile">
                                <IconButton>


                                    <SettingsIcon/>
                                </IconButton>
                            </Link>
                        </div>
                    )}
                  
                </div>
            </div>
        </div>

        <span className="user"><h1>Posts</h1></span> 
        <div className='userPosts'>
            {(this.state.userPosts.slice(0).reverse() || []).map((post) => {
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