import React, {Component} from 'react';
import {connect} from 'react-redux';


class ReviewComments extends Component {
    render() {
        return(
            <p>Comments: </p>
        )
    }
}

export default connect()(ReviewComments);