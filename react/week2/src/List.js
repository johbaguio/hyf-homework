import React from 'react';

class ToDoList extends React.Component{
    render(){
        const deleteItem = this.props.deleteItem;
        const toDoStatus = this.props.toDoStatus;
        const list = this.props.info.map((data) => (
            <li key = {data.id}> 
                <input type="checkbox" onClick={() => toDoStatus(data)}/> {data.description} 
                <button onClick={() => deleteItem(data)}> x </button>
            </li>));
        return (
            <div id = 'details'>
                <ul className = 'info'>{list}</ul>
            </div>
        )
    }
}


export default ToDoList;