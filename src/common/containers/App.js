import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as LayoutActions from '../actions/layout';
import Siderbar from '../component/layout/siderbar';
import Header from '../component/layout/Header';
import Home from '../component/Home';


class App extends Component {

    constructor(props){
        super(props);
    }

    handleToggleSiderbar(e){
        e.preventDefault();
        this.props.toggleSiderbar(!this.props.layout.siderbarOpen)
    }

    render(){
        const {layout,counter,todos} = this.props;
        const layoutClass = classNames('wrapper',{'open':layout.siderbarOpen})
        return(
            <div className={layoutClass}>
                <Siderbar layout={layout} />
                <div className="wrap">
                    <Header counter={counter} todos={todos} />
                    <div className="container content">
                        {!this.props.children && <Home />}
                        {this.props.children}
                    </div>
                </div>
                <label className="sidebar-toggle" onClick={(e)=>this.handleToggleSiderbar(e)}></label>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    layout : state.layout,
    user:state.user,
    counter:state.counter,
    todos:state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions,dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);