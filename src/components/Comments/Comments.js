//Comments.js
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Comments);