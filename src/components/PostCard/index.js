import React from "react";
import './style.css';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            projectTitle: this.props.projectTitle,
            description: this.props.description,
            institution: this.props.institution,
            skills: this.props.skills,
            banner: this.props.banner
        }
    }

    render() {
        let desc;
        if (this.props.description.length <= 125){
            desc=this.props.description
        }
        else {
            desc=(this.props.description).substring(0, 125) + "...";
        }

        return (
            <div className='post-card-container'>
                <Card className="post-card">
                    <CardMedia 
                        component="img"
                        image={this.props.banner}
                        alt="">
                    </CardMedia>
                    <CardContent className='card-content'>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.props.projectTitle}
                        </Typography>
                        <Typography id="post-author" variant="body2" color="text.secondary">
                            <strong>Author: </strong> {this.props.username}
                        </Typography>
                        <Typography id="post-institution" variant="body2" color="text.secondary">
                            <strong>Institution: </strong>{this.props.institution}
                        </Typography>
                        <Typography id="post-Desc" variant="body2" color="text.secondary">
                            {desc}
                        </Typography>
                    </CardContent>
                    <CardActions className="card-bottom">
                        <h2>{this.state.skills.map((skill, i) => <span className="thumbBadge" key={i}>{skill}</span>)}</h2>
                        <Button className="view-more-btn" variant ="contained" size="small">View More</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default PostCard;