import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from './../Review/Review.js';

class Feelings extends Component {

    render() {
        return(
            <Review /> 
        )
    }
    
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Feelings);