//Comments.js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from './../Review/Review.js';
//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {

    constructor() {
        super(); {
            this.state = {
                value: '',
            }
        }
    }

    render() {
        return(
            <div>
                <h1>Any comments you want to leave?</h1>
                <TextField
                    id='commentsInput'
                    label='Comments?'
                    placeholder='Write here.'
                    multiline margin='normal' 
                    type='number' />
                <Button variant="contained" color="primary">
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

export default connect(mapReduxStoreToProps)(Comments);