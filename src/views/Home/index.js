import React from 'react';
import './style.css';
import Header from '../../components/Header';

class Home extends React.Component {
    render() { 
        return (
            <div className='home'>
                <Header/>
            </div>
        );
    }
}
 
export default Home;