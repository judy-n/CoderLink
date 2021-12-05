import React from 'react';
import './style.css';
import PostCard from '../PostCard';
import { uid } from 'react-uid';
import ToolBar from '../ToolBar';
import PostThumbnail from '../PostThumbnail';
import pixel from './static/pixel.png'

import { getAllPosts, getPostById } from '../../actions/post';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: []
        }
        
    }

    async componentDidMount() {
        await getAllPosts(this)
    }
    

    render() {
        return (
            <div>
                <ToolBar
                    addPost={this.props.addPost}
                />
                <div className='postList'>
                    {this.state.postList.slice(0).reverse().map((post) => {
                        return (
                            <PostCard
                                id={post._id}
                                key={post._id}
                                username={post.author}
                                projectTitle = {post.title}
                                description={post.description}
                                skills ={post.skillsRequired}
                                banner={pixel}
                                institution = {post.institution}
                                currentUsername = {this.props.currentUsername}
                                isAdmin = {this.props.isAdmin}
                                removePost = {this.props.removePost}
                                post = {post}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default PostList;