
import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import pixel from './static/pixel.png'



class PostPage extends React.Component {


    constructor(props) {
        super(props);
    
    
    this.state = {
        currentPost: this.props.currentPost,
        author: this.props.currentPost.author,
        institution: this.props.currentPost.institutions[0],
        title: this.props.currentPost.title,
        description: this.props.currentPost.descriptionShort,
        skills: this.props.currentPost.skillsRequired
    }
}


    render() { 
        return (
        <div className="postpage-container">
            <Header/>

            <div className="postpage-post">
                <div className="postpage-postcontent">

                    <div className="postpage-author">@{this.state.author} - {this.state.institution}</div>
                    <h2>{this.state.title}</h2>
                    <img src={pixel}></img>
                    <div className="postpage-desc">
                        {this.state.description}
                    </div>
                    <Button
                    variant='contained'>
                        Apply

                    </Button>
                </div>

                <div className="postpage-tags">
                    <h2>Skills required</h2>
                {this.state.skills.map((skill, i) => <span className="ProfileBadge" key={i}>{skill}</span>)}
                </div>

            </div>

        </div>
        
        
        );
    }
}
 
export default PostPage;