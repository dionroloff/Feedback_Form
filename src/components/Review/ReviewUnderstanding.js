import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewUnderstandings extends Component {
    render() {
        return(
            <p>Understanding: {this.props.reduxStore.understandingReducer}</p>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(ReviewUnderstandings);