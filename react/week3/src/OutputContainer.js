import React from 'react';
import Header from './components/Header';
import ToDoList from './components/List';
import Forms from './components/Forms';
// import Footer from './Footer';


// const dueDates = ['Wed Sep 13 2017', 'Thu Sep 14 2017', 'Fri Sep 15 2017'];
let date = new Date();
let deadline = date.toDateString();
class ToDoApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = { toDoList : [
            {
              "id": 1,
              "description": "Get out of bed",
              "date": deadline,
              "done": true
            },
            {
              "id": 2,
              "description": "Brush teeth",
              "date": deadline,
              "done": false
            },
            {
              "id": 3,
              "description": "Eat breakfast",
              "date": deadline,
              "done": false
            }
          ],
          inputText: ''}
    }

    componentDidMount(){

    }

    addToDo = () => {
        const newTodos = this.state.toDoList.concat({
            "id": this.state.toDoList.length + 1,
            "description": this.state.inputText,
            "date": deadline,
            "done": false
          });
        this.setState({ toDoList: newTodos });
        console.log(newTodos)
    };

    newToDoInput = (x) => {
        const typedText = x.target.value;
        this.setState({inputText: typedText})

    };

    editItem = id => {
        
    }

    deleteTodo = id => {
        const newTodos = this.state.toDoList.filter(toDo => toDo.id !== id);
        console.log(newTodos);
        this.setState({ toDoList: newTodos });
    };

    completedToDo = id => {
        const index = this.state.toDoList.findIndex(toDo => toDo.id === id);
        const toDo = this.state.toDoList[index];
        toDo.done = !toDo.done;
        this.setState({ toDoList: this.state.toDoList})
    };


    render(){
        // if(this.state.toDoList.length === 0){
        //     return <h3> Nothing to do...</h3>
        // }
        return(
            <div id = 'container'>
                <Header /> 
                <div id = 'lists'>
                    <div className = 'info toDos'>
                        <h3> What to do?</h3> <hr /><br />
                        < Forms newTodo = {this.addToDo}/>
                        {/* <input placeholder="Type a new to do here" value ={this.inputText} onChange={this.newToDoInput}/>
                        <button onClick = {this.addToDo}>Add</button> */}
                        <ToDoList info = {this.state.toDoList} editToDo = {this.editItem} deleteItem = {this.deleteTodo} toDoStatus = {this.completedToDo} />
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default ToDoApp;