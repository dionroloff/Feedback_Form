import React, {Component} from 'react';
import {connect} from 'react-redux';


class ReviewComments extends Component {

    // componentDidMount = () => {
    //     this.ableClick();
    // }

    // ableClick = () => {
    //     if (this.props.reduxStore.commentsReducer !== '') {

    //     }
    // }

    render() {
        return(
            <p>Comments: {this.props.reduxStore.commentsReducer}</p>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStoreToProps)(ReviewComments);