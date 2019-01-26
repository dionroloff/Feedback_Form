import React, {Component} from 'react';
import {connect} from 'react-redux';

class ThankYou extends Component {
    
    returnToFeeling = () => {
        this.props.history.push('/feeling');
    }
    
    render() {
        return(
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.returnToFeeling}>Leave New Feedback</button>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(ThankYou);