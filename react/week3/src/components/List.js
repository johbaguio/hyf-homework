import React from 'react';


class ToDoList extends React.Component{
    render(){
        const editToDo = this.props.editToDo;
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
                    {data.description} - - - -
                    {data.date}
                </span>
                
                <button onClick={() => editToDo(data.id)} className='editBtn'> EDIT </button>
                <button onClick={() => deleteItem(data.id)} className='deleteBtn'> x </button>

            </li>)
             
           );

        if(list.length === 0){
            return <h4> ✓ Nothing left to do...</h4>
        }
    
        return (
            
            <div id = 'details'>
                <ul className = 'info'>{list}</ul>
            </div>
        )
    }
}


export default ToDoList;