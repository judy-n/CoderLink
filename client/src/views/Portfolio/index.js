import React from 'react';
import "./style.css";
import Header from '../../components/Header';
import profilepic from "./static/default.jpeg"
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import github from './static/github.png';
import resume from './static/resume.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import pixel from './static/pixel.png'
import shooter from './static/shooter.png'
import ProjectCard from '../../components/ProjectCard'


class Portfolio extends React.Component {

    state = {
        name: "Judy Naamani",
        skills: ["Python", "Java", "C++"]
    }

    render() { 
        return (<div className="portfolioPage">

            <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            />
            <div className="port-section">
            <div className="port-sidebar">
            
            <div className="port-profile">
                <img src={profilepic}></img>
                <div className="port-name">
                <Typography gutterBottom variant="h6" component="div" id="portName">{this.state.name}</Typography>
                <div className="port-icons">
                <a href="#"><img src={github}></img></a>
                <a href="#"><img src={resume}></img></a>
                </div>
                </div>
                <div className="port-prof-skills">
                <div className="port-vl"></div>
                <div className="prof-skill-list">{this.state.skills.map((skill, i) => <span key={i}>{skill}</span>)}</div>
                </div>

            </div>
            
            </div>
    

            <div className="port-projects">
            <ProjectCard

            title="Vardew Stalley"
            banner={pixel}
            description="A farming RPG game for PC, final project for a university course."
            skills={["C#", "Unity"]}
            />

            <ProjectCard

            title="Forkknife"
            banner={shooter}
            description="Online multiplayer shooter game that I made for a hackathon."
            skills={["C++", "Unreal Engine"]}
            />

            <ProjectCard

            title="Vardew Stalley"
            banner={pixel}
            description="A farming RPG game for PC, final project for a university course."
            skills={["C#", "Unity"]}
            />
                
            </div>



            </div>




        </div>




        );
    }
}
 
export default Portfolio;