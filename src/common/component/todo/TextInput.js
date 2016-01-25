import React,{Component,PropTypes} from 'react'
import classnames from 'classnames';

export default class TextInput extends Component{

    constructor(props,context){
        super(props,context);
        this.state={
            text:this.props.text || ''
        }
    }

    handleSubmit(e){
        const text = e.target.value.trim();
        if (e.which===13){
            this.props.onSave(text)
        }
    }

    render(){
        return(
            <input type="text" onSave={(e) => this.handleSubmit(e)} />
        )
    }
}