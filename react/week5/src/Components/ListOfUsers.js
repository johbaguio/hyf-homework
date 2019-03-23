import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


class ListOfUsers extends React.Component{


    renderUsers = () => {
        const { data } = this.props;
        return data.map(user => {
            return (
            <React.Fragment>

                <li key={user.id} className='username'> 
                    {user.login} <br/>
                    <img src={user.avatar_url} alt = "user-pic" className='pics'/>   <br />
                    <BrowserRouter>
                        <Link to = '/{user.login}' className='profile-text'>View Profile</Link>
                    </BrowserRouter>
                    
                </li> 
                
                <br /> <br />
                
            </React.Fragment>);
                    
        });
    };


    render(){
        return (<React.Fragment>
            <ul className='users'>{this.renderUsers()}</ul> <br />
        </React.Fragment>);
    }
}


export default ListOfUsers;
