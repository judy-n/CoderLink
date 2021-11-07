import React from 'react';
import './style.css';
import PostCard from '../PostCard';
import { uid } from 'react-uid';
import ToolBar from '../ToolBar';
import PostThumbnail from '../PostThumbnail';
import coffee from './static/coffee.jpg'

import PostEntity from '../../model/Post';

class PostList extends React.Component {
    render() {
        return (
            <div>
                <ToolBar
                    addPost={this.props.addPost}
                />
                <div className='postList'>
                    {this.props.postList.map((post) => {
                        return (
                            <PostCard
                                key={uid(post)}
                                username={post.author}
                                projectTitle = {post.title}
                                description={post.descriptionShort}
                                skills ={post.skillsRequired}
                                banner={coffee}
                                institution = {post.institutions[0]}
                                currentUsername = {this.props.currentUsername}
                                isAdmin = {this.props.isAdmin}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default PostList;