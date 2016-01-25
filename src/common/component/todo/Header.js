import React,{Component,PropTypes} from 'react'
import TextInput from './TextInput'

export default class Header extends Component{
    constructor(props,context){
        super(props,context)
    }

    handleSave(text){
        if (text.length !== 0){
            this.props.addTodo(text)
        }
    }
    render(){
        return (
            <div className="header">
                <TextInput newTodo onSave={(text)=>this.handleSave(text)} placeholder="What needs to be done?"/>
            </div>
        )
    }
}