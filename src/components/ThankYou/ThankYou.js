import React, {Component} from 'react';
import {connect} from 'react-redux';

class ThankYou extends Component {
    
    // returnToStart = () => {
    //     this.props.history.push('/feeling');
    // }
    
    render() {
        return(
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.returnToStart}>Leave New Feedback</button>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(ThankYou);