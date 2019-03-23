import React from 'react';
import Header from './Header';
// import SearchInput from './SearchInput';
// import ListOfUsers from './ListOfUsers'
import SearchUser from './SearchUser';

class Container extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <SearchUser />
                {/* <ListOfUsers /> */}
            </div>
            
        )
    }
}

export default Container;