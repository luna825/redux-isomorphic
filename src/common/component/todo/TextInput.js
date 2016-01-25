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
        const text = e.target.value;
        if (e.which===13){
            this.props.onSave(text)
            this.setState({text:''})
        }
    }
    handleBlur(e){
        if (!this.props.newTodo){
            const text = e.target.value;
            this.props.onSave(text)
        }
    }
    handleChange(e){
        this.setState({text:e.target.value})
    }

    render(){
        return(
            <input type="text" className={classnames({edit:this.props.editing,'new-todo':this.props.newTodo})}
             value={this.state.text}
             onKeyDown={(e) => this.handleSubmit(e)}
             onBlur={(e)=>this.handleBlur(e)}
             onChange={(e)=>this.handleChange(e)}
             placeholder={this.props.placeholder}
             autoFocus="true"
            />
        )
    }
}