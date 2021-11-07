import React from 'react';

import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


class ProjectCard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            // skills: this.props.skills,
            banner: this.props.banner,
            // githubLink: this.props.githubLink,
            // projLink: this.props.projLink

        }
    }

    render() { 
        return (<div>

<div className="port-proj-card">
                <Card id="projCard">
                    <CardMedia
                        component="img"
                        image={this.state.banner}
                        height="140"
                   />
                   <CardContent id="projCardCont">
                    <Typography gutterBottom variant="h5" component="div">
                    {this.state.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     {this.state.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <IconButton aria-label="github repo">
                    <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="link">
                    <LinkIcon />
                    </IconButton>
                    </CardActions>
                </Card>
                </div>



        </div>
        );
    }
}
 
export default ProjectCard;