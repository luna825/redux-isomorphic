import {bindActionCreators} from 'redux'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import Reddit from '../component/Reddit'
import * as RedditActions from '../actions/reddit'

Reddit.need = [
    RedditActions.fetchPosts
]

function mapStateToProps (state) {
    let { selectedReddit, postsByReddit } = state;
    const {
        isFetching,
        lastUpdated,
        error,
        items: posts
    } = postsByReddit[selectedReddit] || {
        isFetching: true,
        error:{},
        items: []
    };

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(RedditActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Reddit);