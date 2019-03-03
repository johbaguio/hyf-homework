import React from 'react';

class ToDoList extends React.Component{
    render(){
        const deleteItem = this.props.deleteItem;
        const toDoStatus = this.props.toDoStatus;
        const list = this.props.info.map((data) => (
            <li key = {data.id}> 
                <input 
                    type="checkbox" 
                    checked = {data.done} 
                    onChange={() => (toDoStatus(data.id))}
                /> 
                <span className = {data.done ? 'completed-toDo' : ''}> 
                    {data.description} 
                </span>
                <button onClick={() => deleteItem(data.id)}> x </button>
            </li>));
        return (
            
            <div id = 'details'>
                <ul className = 'info'>{list}</ul>
            </div>
        )
    }
}



export default ToDoList;