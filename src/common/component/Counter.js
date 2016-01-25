import React,{Component,PropTypes} from 'react' 

export default class Counter extends Component{
    render(){
        const {counter,increment,decrement} = this.props;

        return(
          <div className="posts">
            <h1>Counter</h1>
            <p>This counter is here to show the state is conserved as you navigate through the app.</p> 
            <p>
              <b>Counter: {counter} times</b>
              {' '}
              <button onClick={increment}>+</button>
              {' '}
              <button onClick={decrement}>-</button>
            </p>
          </div>
        )
    }
}
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};