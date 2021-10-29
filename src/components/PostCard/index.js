import React from "react";
import './style.css';
import Button from '@mui/material/Button';

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            projectTitle: this.props.projectTitle,
            description: this.props.description,
            institution: this.props.institution,
            skills: this.props.skills
        }
    }

    // state = {
    //     username: 'Akshat',
    //     projectTitle: 'Recommender system for cafes',
    //     description: 'Building a recommender system to recommend cafes based on previous choices of food',
    //     institution: 'University of Toronto',
    //     skills: ['Python', 'Neural networks']
    // }

    render() {
        return (
            <div className='post-card'>
                <div className='card'>
                    <div className='about'>
                        <h3>Name: <span className="content">{this.state.username}</span></h3>
                        <h3>Project name: <span className="content">{this.state.projectTitle}</span></h3>
                        <h3>Project description: <span className="content">{this.state.description}</span></h3>
                        <h3>Institution: <span className="content">{this.state.institution}</span></h3>
                    </div>
                    <div className='skills'>
                        <h3>Skills: {this.state.skills.map((skill, i) => <span className="badge" key={i}>{skill}</span>)}</h3>
                        <div className="about-buttons">
                            <Button onClick={() => {}} variant="contained" className="about-btn blue">View More</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostCard;