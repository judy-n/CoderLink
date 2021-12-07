
import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import pixel from './static/pixel.png'
import { getPostById } from '../../actions/post'



class PostPage extends React.Component {


    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    
    
    this.state = {
        currentPost: null,
        isMyPost: false
    }
}

async componentDidMount() {
    const post = await getPostById(this.props.match.params.id)
    console.log(post)
    if (post) {
        this.setState({currentPost: post})
        if (post.author === this.props.currentUser.username) {
            this.setState({isMyPost: true})
        }
    }
}

componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            if (this.state.currentPost.author === this.props.currentUser.username) {
                this.setState({isMyPost: true})
            }
        }
}

handleDelete() {
        this.props.removePost(this.state.currentPost._id)
        window.location.href = "/home"
}

    render() { 
        return (
        <div className="postpage-container">
           <Header 
            handleLogout={this.props.handleLogout}
            loggedIn={this.props.loggedIn}
            />

            <div className="postpage-post">
                <div className="postpage-postcontent">

                    <div className="postpage-author">@{(this.state.currentPost && this.state.currentPost.author) || ''} - {(this.state.currentPost && this.state.currentPost.institution) || ''}</div>
                    <h2>{(this.state.currentPost && this.state.currentPost.title) || ''}</h2>
                    <img src={pixel}></img>
                    <div className="postpage-desc">
                        {(this.state.currentPost && this.state.currentPost.description) || ''}
                    </div>
                    <div className={"action-buttons"}>

                    <Button
                    variant='contained'>
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
                </div>

                <div className="postpage-tags">
                    <h2>Skills required</h2>
                {((this.state.currentPost && this.state.currentPost.skillsRequired) || []).map((skill, i) => <span className="ProfileBadge" key={i}>{skill}</span>)}
                </div>

            </div>

        </div>
        
        
        );
    }
}
 
export default PostPage;