import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewSupport extends Component {
    render() {
        return(
            <p>Support: {this.props.reduxStore.supportReducer}</p>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(ReviewSupport);