import React, {Component} from 'react';
import {connect} from 'react-redux';

class Supported extends Component {

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Supported);