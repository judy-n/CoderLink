
import React from 'react';

class Profile extends React.Component {

    state = {
        username: ""
    }
    render() { 
        return (
        <div>Profile Page {this.props.username}</div>
        );
    }
}
 
export default Profile;