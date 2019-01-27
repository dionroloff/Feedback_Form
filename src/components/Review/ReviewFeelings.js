import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewFeelings extends Component {
    render() {
        return(
            <p>Feelings: {this.props.reduxStore.feelingReducer}</p>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(ReviewFeelings);