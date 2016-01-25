import {TOGGLE_SIDERBAR} from '../actions/layout'

const layout = (state={siderbarOpen:true},action) =>{
    switch(action.type){
        case TOGGLE_SIDERBAR:
            return {siderbarOpen:action.value}
        default:
            return state
    }
}

export default layout;