import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Header from '../../components/Header';






class Post extends React.Component {
    
    state = {
        // State variables that will be used to replace the dummy placeholders
    }
    
    render() {
        return (
            <div className="postPage">
                <Header/>
            
            <div className="postTitle">
                <h2>Post Title</h2>
            </div>
            
            <div className="postText">
                <p></p>
            </div>
            
            <button className="applyButton">
            </button>
            
            </div>  
        );
    }
    
}