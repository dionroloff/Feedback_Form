import React, {Component} from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Understanding);