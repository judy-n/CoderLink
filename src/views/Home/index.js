import React from 'react';
import './style.css';
import Header from '../../components/Header';
import PostList from '../../components/PostList';

class Home extends React.Component {
    render() { 
        return (
            <div className='home'>
                <Header/>
                <PostList/>
            </div>
        );
    }
}
 
export default Home;