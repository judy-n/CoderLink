import React from 'react';
import './style.css';
import Header from '../../components/Header';
import PostsList from '../../components/PostsList';

class Home extends React.Component {
    render() { 
        return (
            <div className='home'>
                <Header/>
                <PostsList/>
            </div>
        );
    }
}
 
export default Home;