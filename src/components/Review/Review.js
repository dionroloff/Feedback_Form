//Review.js
// This will be the current redux values displayed on the DOM
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Review extends Component {
    render() {
        return(
            <div>
                <h3>Feelings:</h3>
                <h3>Understanding:</h3>
                <h3>Support:</h3>
                <h3>Comments:</h3>
                <button>Incomplete</button>
            </div> 
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Review);