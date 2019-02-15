import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
//Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Supported extends Component {

    constructor() {
        super();
        this.state = {
            response: '',
        }
    }

    //This will take the users input and dispatch to the
    //supportReducer function, which will log the input to
    //the review card at the bottom of the screen
    handleNextButton = (event) => {
        event.preventDefault();
        if (this.state.response !== '') {
            const action = { type: 'SUBMIT_SUPPORT', payload: this.state.response };
            this.props.dispatch(action);
            this.props.history.push('/comments');
        } else {
            alert('Please fill in a response.');
        }
    }

    handleChange = (event) => {
        this.setState({
            response: event.target.value,
        })
    }

    render() {
        console.log(this.state.response);
        return (
            <div>
                <Card>
                    <CardContent>

                        <Typography color="textPrimary">
                            <h1>How well are you being supported?</h1>
                        </Typography>

                        <Typography variant="h5" component="h2">
                            <TextField
                                onChange={this.handleChange}
                                id='supportedInput'
                                label='Supported?'
                                placeholder='From 1 and 5'
                                multiline margin='normal' />
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Grid container justify="center">
                            <Button id='supported-next-btn' onClick={this.handleNextButton} variant='contained' color='primary'>
                                Next
                            </Button>
                        </Grid>
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

export default connect(mapReduxStoreToProps)(Supported);