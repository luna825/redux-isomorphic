import React,{Component,PropTypes} from 'react'
import Header from './todo/Header'
import Footer from './todo/Footer'
import Selection from './todo/Selection'

export default class Todo extends Component{
    render(){
        const {todos,addTodo} = this.props;
        return(
        <div>
            <Header addTodo={addTodo} />
            <Selection todos={todos} />
            <Footer />    
        </div>        
        )
    }
}