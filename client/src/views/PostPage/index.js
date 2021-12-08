
import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import pixel from './static/pixel.png'
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import { getPostById, applyToPost } from '../../actions/post'
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';



class PostPage extends React.Component {


    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.applyToPost = this.applyToPost.bind(this)
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
    
    this.state = {
        currentPost: null,
        isMyPost: false,
        open: false,
        message: null,
        applied: false,

    }
}
    // For Apply Modal
    handleOpen() {
        this.setState({open: true})
    }

    // For Apply Modal
    handleClose() {
        this.setState({open: false})
        this.setState({applied: false})
    }


async componentDidMount() {
    const post = await getPostById(this.props.match.params.id)
    console.log(post)
    if (post) {
        this.setState({currentPost: post})
        if (post.author === this.props.currentUser.username || this.props.isAdmin) {
            this.setState({isMyPost: true})
        }
    }
}

componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            if (this.state.currentPost.author === this.props.currentUser.username || this.props.isAdmin) {
                this.setState({isMyPost: true})
            }
        }
}

handleDelete() {
        this.props.removePost(this.state.currentPost._id)
        window.location.href = "/home"
}

async applyToPost () {
    await applyToPost(this.props.currentUser.username, this.state.message, this.state.currentPost._id)
    this.setState({applied: true})
    this.setState({message: ''})

}

    render() { 
        return (
        <div className="postpage-container">
           <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            currentUsername={this.props.currentUsername}
            />

            <div className="postpage-post">
                <div className="postpage-postcontent">

                    <div className="postpage-author"><Link className="userTag" style={{textDecoration: 'none', color:'inherit'}}
                                                      to={(this.state.currentPost) && `/profile/${this.state.currentPost.author}`}>@{(this.state.currentPost && this.state.currentPost.author) || ''}</Link> - {(this.state.currentPost && this.state.currentPost.institution) || ''}</div>
                    <h2>{(this.state.currentPost && this.state.currentPost.title) || ''}</h2>
                    <img src={pixel}></img>
                    <div className="postpage-desc">
                        {(this.state.currentPost && this.state.currentPost.description) || ''}
                    </div>
                    <div className={"action-buttons"}>

                    <Button
                    variant='contained'
                    onClick={(this.props.currentUsername) ? this.handleOpen :((e) => {e.preventDefault(); window.location.href="/login"})}
                    >
                        Apply
                    </Button>
                        {(this.props.isAdmin || this.state.isMyPost) && (
                            <Button
                                className="del-btn"
                                variant='outlined'
                                onClick = {this.handleDelete}>
                                Delete
                            </Button>
                        )
                        }
                    </div>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div className="applyModal">
                            <IconButton
                                className="close-modal"
                            onClick={this.handleClose}>
                                <CloseIcon/>
                            </IconButton>
                            <h2>Apply to <span>{`${(this.state.currentPost && this.state.currentPost.title) || ''}`}</span></h2>
                            <hr/>
                            <p>Make sure to include some contact info so the creator can reach out to you. </p>
                            <TextField
                                className="applyField"
                                multiline
                                rows={6}
                                helperText="Explain why you'd be good for this project!"
                                id="demo-helper-text-aligned"
                                label="Message"
                                value={this.state.message}
                                onChange={(e) => {this.setState({message: e.target.value})}}
                            />
                            <Button
                                className="submitBtn"
                                variant="contained"
                                onClick={this.applyToPost}
                            >
                                Submit
                            </Button>
                            {this.state.applied &&
                                (<Alert severity="success" className={"apply-alert"}>
                                    <AlertTitle>Success</AlertTitle>
                                    Application sent!
                                </Alert>)
                            }

                        </div>
                    </Modal>
                </div>

                <div className="postpage-tags">
                    <h2>Skills required</h2>
                {((this.state.currentPost && this.state.currentPost.skillsRequired) || []).map((skill, i) => <span className="ProfileBadge" key={i}>{skill}</span>)}
                    {(this.props.isAdmin || this.state.isMyPost) && <h2>Applications</h2>}

                    <div className="appList">
                        <List className="listEl">
                            {(this.props.isAdmin || this.state.isMyPost) && (this.state.currentPost.applications || []).map((a) =>
                                <ListItem className="appListItem">
                                    <Link to={`/profile/${a.username}`} style={{ color: 'inherit', textDecoration: 'none', maxWidth: '20rem' }}>
                                    <ListItemButton>
                                        <ListItemText className="appListText"
                                            primary={a.username}
                                                      secondary={a.message}/>
                                    </ListItemButton>
                                    </Link>
                                </ListItem>
                            )
                            }
                        </List>
                    </div>
                </div>

            </div>

        </div>
        
        
        );
    }
}
 
export default PostPage;