
import React from 'react';
import "./styles.css";
import profilepic from "./static/default.jpeg"

class Profile extends React.Component {

    state = { // we will load data into state variables
        name: "Judy Naamani",
        bio: "Hi I'm a silly goose!",
        institution: "University of Toronto",
        skills: ["python", "java"],
    }
    render() { 
        return (
        <div>
        
        <h1>Profile of {this.props.username}</h1>
        
        <div className='card'>
            {/* Profile pic */}
            <img src={profilepic} alt=""></img>
            <div className='about'>
                <h3>Name: <span className="content">{this.state.name}</span></h3>
                <h3>Bio: <span className="content">{this.state.bio}</span></h3>
                <h3>Institution: <span className="content">{this.state.institution}</span></h3>
                <h3>Skills: {this.state.skills.map((skill, i) => <span className="badge" key={i}>{skill}</span>)}</h3>
                <div className="about-buttons">
                  <button onClick={() => {}} className="about-btn blue">Connect</button>
                  <button onClick={() => {}} className="about-btn green">Portfolio</button>
                </div>
            </div>
        </div>
                
        </div>
        );
    }
}
 
export default Profile;