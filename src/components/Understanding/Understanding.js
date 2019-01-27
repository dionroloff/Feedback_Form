import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from './../Review/Review.js';
//Material UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Understanding extends Component {

    constructor() {
        super();
        this.state = {
            response: '',
        }
    }

    //This will take the users input and dispatch to the understandingReducer
    //which will log the return value to the review card
    handleNextButton = (event) => {
        event.preventDefault();
        if (this.state.response !== '') {
            const action = {type: 'SUBMIT_UNDERSTANDING', payload: this.state.response}
            this.props.dispatch(action);
            this.props.history.push('/supported');
        } else {
            alert('Please fill in a response.');
        }
    } //end handleNextButton

    handleChange = (event) => {
        this.setState({
            response: event.target.value,
        })
        console.log(this.response);
    } //end handleChange

    render() {
        return(
            <div>
                <Card>
                    <CardContent>

                        <Typography color="textPrimary">
                            <h1>How well are you understanding the content?</h1>
                        </Typography>

                        <Typography variant="h5" component="h2">
                            <TextField
                                onChange={this.handleChange}
                                id='understandingInput'
                                label='Understanding?'
                                placeholder='From 1 and 5'
                                multiline margin='normal' />
                        </Typography>

                    </CardContent>
                    <CardActions>
                    <Button id='understanding-next-btn' onClick={this.handleNextButton} variant='contained' color='primary'>
                        Next
                    </Button>
                    </CardActions>
                </Card>
                <Card>
                    <CardContent>
                        <Review /> 
                    </CardContent>
                </Card>
            </div>
        )
    }
    
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Understanding);