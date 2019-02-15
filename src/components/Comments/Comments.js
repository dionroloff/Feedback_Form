//Comments.js
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

class Comments extends Component {

    constructor() {
        super(); {
            this.state = {
                value: '',
            }
        }
    }

    //When the user clicks the next button on the comments page, the input
    //will dispatch to the commentsReducer function, which will
    //render the return value on the review card
    handleNextButton = (event) => {
        event.preventDefault();
        if (this.state.response !== '') {
            const action = { type: 'SUBMIT_COMMENTS', payload: this.state.response };
            this.props.dispatch(action);
            this.props.history.push('/review');
        } else {
            alert('Please fill in a response.');
        }
    } //end handleNextButton

    //sets state to user's comments
    handleChange = (event) => {
        this.setState({
            response: event.target.value,
        })
    } //end handleChange

    render() {
        console.log(this.state.response);
        return (
            <div>
                <Card>
                    <CardContent>

                        <Typography color="textPrimary">
                            <h1>Any comments you want to leave?</h1>
                        </Typography>

                        <Typography variant="h5" component="h2">
                            <TextField
                                onChange={this.handleChange}
                                id='commentsInput'
                                label='Comments?'
                                placeholder='Write here.'
                                multiline margin='normal' />
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Grid container justify="center">
                            <Button id='comments-next-btn' variant='contained' color='primary' onClick={this.handleNextButton}>
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

export default connect(mapReduxStoreToProps)(Comments);