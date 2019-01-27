import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewSupport extends Component {
    render() {
        return(
            <p>Support: </p>
        )
    }
}

export default connect()(ReviewSupport);