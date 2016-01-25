import React,{Component,PropTypes} from 'react'

export default class Item extends Component{

    constructor(props,context){
        super(props,context)
    }

    render(){
        const {todo} = this.props;
        return (
            <li key={todo.id}>
                {todo.text}
            </li>
        )
    }
}
