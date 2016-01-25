import React,{Component,PropTypes} from 'react'

export default class Head extends Component{
    render(){
        const {counter} = this.props;
        const todosCount = this.props.todos.reduce((count,todo)=>
            todo.completed ? count:count+1,0
        )
        return(
            <div className="masthead">
                <div className="container">
                  <h3 className="masthead-title">
                    <a href="/" title="Home">Redux Universal</a>
                    <small>Click on menu icon to get started</small>
                    <span className="counter-indicator">{`Counter : ${counter}`}</span>
                    <span className="todo-indicator">{`Todos : ${todosCount}`}</span>
                  </h3>
                </div>
            </div>
        )
    }
}