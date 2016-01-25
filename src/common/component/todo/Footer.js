import React,{Component,PropTypes} from 'react'

export default class Footer extends Component{
    render(){
        return(
            <div>
                <p>Filter:
                    {' '}
                    Show_ALL
                    {' '}
                    Active
                    {' '}
                    Completed
                </p>
            </div>
        )
    }
}