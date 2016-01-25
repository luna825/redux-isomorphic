import React,{Component,PropTypes} from 'react'
import Item from './Item'
export default class Selection extends Component{
    render(){
        const {todos } = this.props;
        return(
            <ul>
                {todos.map((todo) => <Item key={todo.id} todo={todo}/>)}
            </ul>
        )
    }
}