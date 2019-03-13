import React from 'react';

class ListOfUsers extends React.Component{


    renderUsers = () => {
        const { data } = this.props;
        return data.map(user => {
            return (<React.Fragment>
                <li key={user.id} className='username'> 
                    {user.login} <br/>
                    <img src={user.avatar_url} alt = "user-pic" className='pics'/>   
                </li> <br /> <br />
                
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
