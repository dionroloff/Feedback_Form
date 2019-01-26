//Review.js
// This will be the current redux values displayed on the DOM
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Review extends Component {

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Review);