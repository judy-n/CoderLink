import React from 'react';
import './style.css';
import PostCard from '../PostCard';
import { uid } from 'react-uid';
import ToolBar from '../ToolBar';
import PostThumbnail from '../PostThumbnail';
import coffee from './static/coffee.jpg'

import { getAllPosts } from '../../actions/post';

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
                    {this.state.postList.map((post) => {
                        return (
                            <PostCard
                                key={uid(post)}
                                username={post.author}
                                projectTitle = {post.title}
                                description={post.description}
                                skills ={post.skillsRequired}
                                banner={coffee}
                                institution = {post.institution}
                                currentUsername = {this.props.currentUsername}
                                isAdmin = {this.props.isAdmin}
                                removePost = {this.props.removePost}
                                post = {post}
                                changeCurrentPost = {this.props.changeCurrentPost}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default PostList;