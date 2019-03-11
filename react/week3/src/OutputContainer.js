import React from 'react';
import Header from './components/Header';
import ToDoList from './components/List';
// import Footer from './Footer';


// const dueDates = ['Wed Sep 13 2017', 'Thu Sep 14 2017', 'Thu Sep 14 2017'];
// let date = new Date();
// let deadline = date.toDateString();
class ToDoApp extends React.Component{

    constructor(props) {
        super(props);
        this.id = 0;
        this.state = { toDoList : [
            {
              "id": 1,
              "description": "Get out of bed",
              "date": new Date('Thu Sep 13 2018').toDateString(),
              "done": true,
              "isEdit": false
            },
            {
              "id": 2,
              "description": "Brush teeth",
              "date": new Date('Fri Sep 14 2018').toDateString(),
              "done": false,
              "isEdit": false
            },
            {
              "id": 3,
              "description": "Eat breakfast",
              "date": new Date('Tue Sep 18 2018').toDateString(),
              "done": false,
              "isEdit": false
            }
          ],
          inputText: '',
          inputDate: '',
          editToDo: '',
          editDate: ''
        }
    }

    componentDidMount(){

    }

    addToDo = () => {
        const newTodos = this.state.toDoList.concat({
            "id": this.state.toDoList.length + 1,
            "description": this.state.inputText,
            "date": new Date(this.state.inputDate).toDateString(),
            "done": false,
            "isEdit": false
          });
        this.setState({ toDoList: newTodos });
        console.log(newTodos)
    };

    newToDoInput = (x) => {
        const typedText = x.target.value;
        this.setState({inputText: typedText})

    };

    newDateInput = (x) => {
        const typedDate = x.target.value;
        this.setState({inputDate: new Date(typedDate).toDateString()})

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

    handleSubmit = e => {
        e.preventDefault();
    };

    render(){
        console.log('state of inputText is ', this.state.inputText)
        return(
            <div id = 'container'>
                <Header /> 
                <div id = 'lists'>
                    <div className = 'info toDos'>
                        <h3> What to do?</h3> <hr /><br />
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text"
                                value = {this.inputText}
                                placeholder = "Type a new to do here"
                                onChange={this.newToDoInput}
                            />
                            <input 
                                type="date"
                                name = "date"
                                value = {this.inputDate}
                                onChange={this.newDateInput}
                            />
                            <button onClick = {this.addToDo} className='addBtn'>Add</button>  
                        </form>
                        <ToDoList info = {this.state.toDoList} editToDo = {this.editItem} deleteItem = {this.deleteTodo} toDoStatus = {this.completedToDo} />
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default ToDoApp;