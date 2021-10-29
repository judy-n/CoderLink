import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Header from '../../components/Header';






class Post extends React.Component {
    
    state = {
        // State variables that will be used to replace the dummy placeholders
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
            
            <div className="postTitle">
                <h2>{this.state.postTitle}</h2>
            </div>
            
            
            {/*The main text, explaining what the side-project is about.*/}
            <div className="postText">
                <p>Elapsam semel occasionem non ipse potest Iuppiter reprehendere.</p>
            </div>
            
            {/* Relevant tags that the poster added.*/}
            <div className="tagList">
                <h3>Relevant Tags</h3>
                <ul>Latin</ul>
                <ul>HTML/CSS</ul>
                <ul>JavaScript</ul>
            </div>
            
            <button onClick={() => {}} variant="primary" size="lg" disabled className="applyButton">
                Apply Now
            </button>
            
            </div>  
        );
    }
    
}

export default Post;
