import React,{Component,PropTypes} from 'react'
import TextInput from './TextInput'
import classnames from 'classnames'

export default class Item extends Component{

    constructor(props,context){
        super(props,context);
        this.state ={
            editing:false
        }
    }
    handleSave(id,text){
        if (text.length===0){
            this.props.deleteTodo(id)
        }else{
            this.props.editTodo(id,text)
        }
        this.setState({editing:false})
    }
    handleDoubleClick(e){
        this.setState({editing:true})
    }

    render(){
        const {todo,completeTodo,deleteTodo} = this.props;
        let element
        if (this.state.editing){
            element=(<TextInput
             text={todo.text}
             editing={this.state.editing}
             onSave={(text) => this.handleSave(todo.id,text)}
            />)
        }else{
            element=(
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>completeTodo(todo.id)} />
                    <label onDoubleClick={(e)=>this.handleDoubleClick(e)}>{todo.text}</label>
                    <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
                </div>
            )
        }

        return (
            <li className={classnames({completed: todo.completed,editing: this.state.editing})}>
                {element}
            </li>
        )
    }
}
