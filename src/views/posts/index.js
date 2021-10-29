'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import profilepic from '../profilePage/static/default.jpeg';
import banner from './static/banner.jpg';


class Post extends React.Component {
    
    state = {
        // State variables that will be used as dummy placeholders
        poster_username: "cecil_c",
        institution: "UofT",
        postTitle: "A Latin Compilation Project",
        datePosted: "October 28, 2021"
    }
    
    render() {
        return (
            <div className="postPage">
                <Header/>
            
            {/*Contains information about the poster and the date they posted.*/}
            <div className="leftSide">
                <div className="postHeaderContainer">
                    <span className="profilePicture"><img src={profilepic} alt=""></img></span>
                    <h4><span className="username">@{this.state.poster_username}</span></h4>

                    {/* TODO: Make the date readable! */}
                    <span className="datePosted">
                        {this.state.datePosted}
                    </span>
                </div>

                {/*A decorative banner, should the poster wish to upload one.*/}
                <div className="postBanner">
                    <img src={banner} alt=""></img>
                </div>

                {/* The post's title page */}
                <div className="postTitle">
                    <h2>{this.state.postTitle}</h2>
                </div>


                {/*The main text, explaining what the side-project is about.*/}
                <div className="postText">
                    <p>Elapsam semel occasionem non ipse potest Iuppiter reprehendere. Our goal is to encode many great latin phrases like this one into one giant encyclopedia for all to use!</p>
                </div>


                {/* Button for applying for this side-project. */}
                <Button onClick={() => {}} variant="primary" size="lg" enabled className="applyButton">
                    Apply Now
                </Button>
            </div>

            <div className="rightSide">
                {/* Relevant tags that the poster added.*/}
                <div className="tagList">
                    <h3>Relevant Tags</h3>
                    <ol>Latin</ol>
                    <ol>HTML/CSS</ol>
                    <ol>JavaScript</ol>
                </div>

            </div>
            </div>  
        );
    }
    
}

export default Post;