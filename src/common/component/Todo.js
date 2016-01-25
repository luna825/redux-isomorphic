import React,{Component,PropTypes} from 'react'
import Header from './todo/Header'
import Footer from './todo/Footer'
import Selection from './todo/Selection'

export default class Todo extends Component{
    render(){
        const {todos,actions} = this.props;
        return(
        <div className="todocontainer">
            <Header addTodo={actions.addTodo} />
            <Selection todos={todos} actions={actions}/>  
        </div>        
        )
    }
}