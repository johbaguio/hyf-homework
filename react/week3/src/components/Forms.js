import React from 'react';

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                description:'',
                date: '',
            }
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    nameChange = e => {
        this.setState({ description: e.target.value });
        console.log(e.target.value);
        this.setState({description : e.target.value});

    };

    dateChange = e => {
        this.setState({ deadline: e.target.value });
        console.log(e.target.value)
        this.setState({date : e.target.value});

    };

    
    render(){
        const { description , deadline } = this.state;
        const newToDo = this.props.newTodo;
        return (

            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value = {description}
                    placeholder = "Type a new to do here"
                    onChange={this.nameChange}
                />
                <input 
                    type="date"
                    name = "date"
                    value = {deadline}
                    onChange={this.dateChange}
            
                />
                <button onClick={() => newToDo(description,deadline)} className='addBtn'>Add</button>
            </form>
        )
    }
}

export default Forms;