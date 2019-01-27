//Review.js
// This will be the current redux values displayed on the DOM
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReviewFeelings from './ReviewFeelings.js';
import ReviewUnderstanding from './ReviewUnderstanding.js';
import ReviewSupport from './ReviewSupport.js';
import ReviewComments from './ReviewComments';

class Review extends Component {

    constructor() {
        super(); {
            this.state = {
                value: '',
            }
        }
    }

    render() {
        return(
            <div className='review-card'>
                <h3>Review Your Feedback</h3>
                <ReviewFeelings />
                <ReviewUnderstanding />
                <ReviewSupport />
                <ReviewComments />
                <button disabled={!this.state.value}>Incomplete</button>
            </div> 
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Review);