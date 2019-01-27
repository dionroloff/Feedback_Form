import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from './../Review/Review.js';
import './../Feeling/Feeling.css';
//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Feelings extends Component {

    handleNextButton = () => {
        this.props.history.push('/understanding');
    }

    render() {
        return(
            <div className='container'>
                <h1>How are you feeling today?</h1>
                <TextField
                    id='feelingInput'
                    label='Feeling?'
                    placeholder='Between 1 and 5'
                    multiline margin='normal' />
                <Button id='feeling-next-btn' onClick={this.handleNextButton} variant='contained' color='primary'>
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

export default connect(mapReduxStoreToProps)(Feelings);