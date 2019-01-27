import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewFeelings extends Component {
    render() {
        return(
            <p>Feelings: </p>
        )
    }
}

export default connect()(ReviewFeelings);