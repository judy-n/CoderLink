import React from "react";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import pixel from './static/pixel.png';

import "./style.css";

class PostThumbnail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            projectTitle: this.props.projectTitle,
            description: this.props.description,
            institution: this.props.institution,
            skills: this.props.skills,
            banner: this.props.banner,
        }
    }
    

    render() { 

        // Truncate description 
        let desc;
        if (this.props.description.length <= 100){
            desc=this.props.description
        }
        else {
            desc=(this.props.description).substring(0, 100) + "...";
        }

        return (<div className="PostThumbnail">
        
        <Card className="post-thumb-card">
            <CardMedia 
            component="img"
            image={this.props.banner}
            alt=""></CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {this.props.projectTitle}
        </Typography>
        <Typography id="post-Desc" variant="body2" color="text.secondary">
        {desc}
        </Typography>
        </CardContent>
        <CardActions className="card-actions">
        <h2>{this.state.skills.map((skill, i) => <span className="thumbBadge" key={i}>{skill}</span>)}</h2>

            <Link to={`/post/${this.props.id}`}>
             <IconButton>
            <OpenInNewIcon/>
             </IconButton>
            </Link>
        </CardActions>

        </Card>


        


        </div>
            
            
            
        );
    }
}
 
export default PostThumbnail;