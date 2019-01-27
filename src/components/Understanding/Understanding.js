import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from './../Review/Review.js';
//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Understanding extends Component {

    handleNextButton = () => {
        this.props.history.push('/supported');
    }

    render() {
        return(
            <div>
                <h1>How well are you understanding the content?</h1>
                <TextField
                    id='understandingInput'
                    label='Understanding?'
                    placeholder='Between 1 and 5'
                    multiline margin='normal' 
                    type='number' />
                <Button onClick={this.handleNextButton} variant='contained' color='primary'>
                    Next
                </Button>
                <Review />
            </div>
        )
    }
    
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Understanding);