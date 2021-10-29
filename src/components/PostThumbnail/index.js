import React from "react";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import bannerPic from './static/pixel.png';

import "./style.css";

class PostThumbnail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            projectTitle: this.props.projectTitle,
            description: this.props.description,
            institution: this.props.institution,
            skills: ["C++", "Unreal Engine"]
        }
    }


    render() { 
        return (<div className="PostThumbnail">
        
        <Card className="post-thumb-card">
            <CardMedia 
            component="img"
            height="140"
            image={bannerPic}
            alt=""></CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          RPG Game
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Need someone proficient in C++ for my open world rpg game project!
        </Typography>
        </CardContent>
        <CardActions className="card-actions">
        <h2>{this.state.skills.map((skill, i) => <span className="thumbBadge" key={i}>{skill}</span>)}</h2>
        <Button className="view-more-btn" variant ="contained" size="small">View More</Button>
        </CardActions>

        </Card>

        <Card className="post-thumb-card">
            <CardMedia 
            component="img"
            height="140"
            image={bannerPic}
            alt=""></CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          RPG Game
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Need someone proficient in C++ for my open world rpg game project!
        </Typography>
        </CardContent>
        <CardActions className="card-actions">
        <h2>{this.state.skills.map((skill, i) => <span className="thumbBadge" key={i}>{skill}</span>)}</h2>
        <Button className="view-more-btn" variant ="contained" size="small">View More</Button>
        </CardActions>

        </Card>

        <Card className="post-thumb-card">
            <CardMedia 
            component="img"
            height="140"
            image={bannerPic}
            alt=""></CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          RPG Game
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Need someone proficient in C++ for my open world rpg game project!
        </Typography>
        </CardContent>
        <CardActions className="card-actions">
        <h2>{this.state.skills.map((skill, i) => <span className="thumbBadge" key={i}>{skill}</span>)}</h2>
        <Button className="view-more-btn" variant ="contained" size="small">View More</Button>
        </CardActions>

        </Card>

        


        </div>
            
            
            
        );
    }
}
 
export default PostThumbnail;