//Review.js
// This will be the current redux values displayed on the DOM
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReviewFeelings from './ReviewFeelings.js';
import ReviewUnderstanding from './ReviewUnderstanding.js';
import ReviewSupport from './ReviewSupport.js';
import ReviewComments from './ReviewComments';

class Review extends Component {
    render() {
        return(
            <div>
                <ReviewFeelings />
                <ReviewUnderstanding />
                <ReviewSupport />
                <ReviewComments />
                <button>Incomplete</button>
            </div> 
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Review);