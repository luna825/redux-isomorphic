import React,{Component,PropTypes} from 'react'
import TextInput from './TextInput'

export default class Header extends Component{

    handleSave(text){
        this.props.addTodo(text)
    }

    render(){
        return <TextInput onSave={this.handleSave} />
    }
}