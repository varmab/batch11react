import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(e)=>{
        var todo=e.target.value;
        console.log(todo);
        this.setState({
            todo:todo
        })
    }

    addTodo=()=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    deleteTodo=(currentTodo)=>{
        this.setState({
            todos:this.state.todos.filter((todo)=>{
                return currentTodo!=todo;
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.addTodo}>Add Todo</button>
                <table style={{border:"1px solid black"}}>
                    <tbody>
                    <tr>
                        <td>Todo</td>
                        <td>Delete</td>
                    </tr>
                    {
                        this.state.todos.map((todo,index)=>{
                            return <tr key={index}>
                                <td>{todo}</td>
                                <td><button onClick={()=>this.deleteTodo(todo)}>Delete</button></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todos;