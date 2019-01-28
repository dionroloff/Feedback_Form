import React, {Component} from 'react';
import {connect} from 'react-redux';


class ReviewComments extends Component {
    
    render() {
        return(
            <p>Comments: {this.props.reduxStore.commentsReducer}</p>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(ReviewComments);