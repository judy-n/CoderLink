import React from 'react';
import './style.css';
import Header from '../../components/Header';
import PostList from '../../components/PostList';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className='home'>
                <Header handleLogout = {this.props.handleLogout}/>
                <PostList
                    postList = {this.props.postList}
                    addPost = {this.props.addPost}
                    currentUsername = {this.props.currentUsername}
                    isAdmin = {this.props.isAdmin}
                    removePost = {this.props.removePost}
                    changeCurrentPost = {this.props.changeCurrentPost}
                />
            </div>
        );
    }
}
 
export default Home;