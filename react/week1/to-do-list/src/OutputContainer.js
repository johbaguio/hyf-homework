import React from 'react';
import Header from './Header';
import ToDoList from './List';
import Footer from './Footer';

const listDescriptions = ['򪪪 Get out of bed', '򪪪 Brush teeth', '򪪪 Eat breakfast'];
const dueDates = ['Wed Sep 13 2017', 'Thu Sep 14 2017', 'Fri Sep 15 2017'];

class Output extends React.Component{
    render(){
        return(
            <div id = 'container'>
                <Header /> 
                <div id = 'lists'>
                    <div className = 'info toDos'>
                        <h3> What to do?</h3> <hr />
                        <ToDoList info = {listDescriptions}/>
                    </div>
                    <div className = 'info dates'>
                        <h3> Due date</h3> <hr></hr>
                        <ToDoList info = {dueDates}/>
                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default Output;