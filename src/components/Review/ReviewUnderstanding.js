import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReviewUnderstandings extends Component {
    render() {
        return(
            <p>Understanding: </p>
        )
    }
}

export default connect()(ReviewUnderstandings);