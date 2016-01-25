import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Todo from '../component/Todo'
import * as TodosActions from '../actions/todos'

function mapStateToProps (state) {
    return{
        todos:state.todos
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(TodosActions,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);