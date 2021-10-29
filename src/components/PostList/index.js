import React from 'react';
import './style.css';
import PostCard from '../PostCard';

class PostList extends React.Component {
    render() {
        return (
            <div className='postList'>
                <PostCard/>
            </div>
        );
    }
}

export default PostList;