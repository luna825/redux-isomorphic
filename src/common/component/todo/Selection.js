import React,{Component,PropTypes} from 'react'
import Item from './Item'
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../actions/todos';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

export default class Selection extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = { filter: SHOW_ALL };
    }
    handleClearCompleted() {
        const atLeastOneCompleted = this.props.todos.some(todo => todo.completed);
        if (atLeastOneCompleted) {
          this.props.actions.clearCompleted();
        }
    }
    handleShow(filter) {
        this.setState({ filter });
    }
    renderToggleAll(completedCount){
        const {todos,actions} = this.props;
        if (todos.length > 0){
            return (
                <input className="toggle-all"
                    type="checkbox"
                    checked={completedCount===todos.length}
                    onChange={actions.completedAll} />
            )
        }
    }
    renderFooter(completedCount){
        const {todos} = this.props;
        const {filter} = this.state;
        const activeCount = todos.length - completedCount;
        if(todos.length >0 ){
            return(
                <Footer activeCount={activeCount}
                    completedCount={completedCount}
                    selectedFilter={filter} 
                    onShow={(filter) => this.handleShow(filter)}
                    onClearCompleted={()=>this.handleClearCompleted()}/>
            )
        }

    }

    render(){
        const {todos,actions } = this.props;
        const {filter} = this.state;
        const filteredTodos = todos.filter(TODO_FILTERS[filter]);
        const completedCount = todos.reduce((count,todo)=>todo.completed ? count+1:count, 0)
        return(
            <section className="main">
                {this.renderToggleAll(completedCount)}
                <ul className="todo-list">
                    {filteredTodos.map((todo) => <Item key={todo.id} todo={todo} {...actions}/>)}
                </ul>
                {this.renderFooter(completedCount)}
            </section >
        )
    }
}