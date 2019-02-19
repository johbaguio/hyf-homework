import React from 'react';

class ToDoList extends React.Component{
    render(){
        console.log(this.props)
        const list = this.props.info.map((data,i) => <li key = {i}> {data} </li>);
        return (
            <div id = 'details'>
                <ul className = 'info'>{list}</ul>
            </div>
        )
    }
}


export default ToDoList;