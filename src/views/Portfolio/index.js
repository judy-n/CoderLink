import React from 'react';
import "./style.css";
import Header from '../../components/Header';
import profilepic from "./static/default.jpeg"

class Portfolio extends React.Component {

    state = {
        name: "Judy Naamani",
    }

    render() { 
        return (<div className="portfolioPage">

            <Header/>
            <div className="port-section">
            <div className="port-sidebar">
            
            <div className="port-profile">
                <img src={profilepic}></img>
                <h3>{this.state.name}</h3>
            </div>
            
            </div>
            <div className="port-projects">hello</div>



            </div>




        </div>




        );
    }
}
 
export default Portfolio;