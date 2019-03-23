import React from 'react';
// import { Link } from "react-router-dom";


class Profile extends React.Component{

    componentDidMount() {
        const username = this.props.match.params;
        window.location.replace(`https://github.com/${username}`)

    }

    render(){
        const username = this.props.match.params;
    return (

        <div> 
            <p>View Profile of {username}</p>
        </div>
    )
        
    }
}


export default Profile;