import React from 'react';
import { getUsers, searchUser } from './GetData';
import SearchInput from './SearchInput';
import ListOfUsers from './ListOfUsers';


class SearchUser extends React.Component {

    state = {
        users:[],
        requestStatus: 'loading',
        inputText: ''
    }

    inputHandler = e => {
        this.setState({ inputText: e.target.value });
        console.log(this.state.inputText)
    }

    searchHandler = () => {
        searchUser(this.state.inputText).then(data =>
            this.setState({ users: data.items, }))
    }

    componentDidMount() {
        getUsers()
        .then(data => {
            console.log(data)
            this.setState({ users: data , requestStatus: 'done'});
            console.log(this.state.users)
        })
        .catch(err => {
            console.log(err);
            this.setState({ requestStatus: "error" });
          });
    }

    render(){
        const { requestStatus, users, inputText} = this.state;
        if (requestStatus === "loading") {
            return <h3>Loading ...</h3>;
          } else if (requestStatus=== "error") {
            return <h3>OOops...</h3>;
          } else {
            
        return (
        <React.Fragment>
            <SearchInput 
                buttonText = {'Search'} 
                textValue={inputText}
                changeHandler = {this.inputHandler}
                searchHandler = {this.searchHandler}

            />
            <ListOfUsers data = {users} />

        </React.Fragment>
        )
        
          }
    }
}

export default SearchUser;
