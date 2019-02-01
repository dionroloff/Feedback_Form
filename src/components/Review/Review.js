//Review.js
// This will be the current redux values displayed on the DOM
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ReviewFeelings from './ReviewFeelings.js';
import ReviewUnderstanding from './ReviewUnderstanding.js';
import ReviewSupport from './ReviewSupport.js';
import ReviewComments from './ReviewComments';
import './../App/App.css';
//Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Review extends Component {


    //Collects all the user's inputs from
    //the respective reducers, package that data into
    //'const userReviewInputs' and POST that to 
    //the database, and finally, bring the user to 
    //the thank you page.
    sendToDb = () => {

        const dataForServer = {
            feeling: Number(this.props.reduxStore.feelingReducer),
            understanding: Number(this.props.reduxStore.understandingReducer),
            support: Number(this.props.reduxStore.supportReducer),
            comments: this.props.reduxStore.commentsReducer
        };

        axios({
            method: 'POST',
            url: '/user-inputs',
            data: dataForServer
        }).then((response) => {
            this.props.history.push('/thank-you');
        }).catch((error) => {
            const errorMessage = `Server error: ${error}`;
            alert(errorMessage);
        })

    } //end sendToDb

    render() {
        //console.log(this.state);
        const isEnabled = this.props.reduxStore.commentsReducer !== '';
        const bull = <p>•</p>;

        return (
            <Grid container justify="center">
                <Grid item xs={9}>
                    <Card>
                        <CardContent >
                            <Typography color='textPrimary'>
                                <h2>Review Your Feedback</h2>
                            </Typography>
                            <Typography color='textSecondary'>
                                {bull}
                                <ReviewFeelings />
                                <ReviewUnderstanding />
                                <ReviewSupport />
                                <ReviewComments />
                                {bull}
                            </Typography>
                            <Grid container justify="center">
                                <CardActions>
                                    <Button id='submit-button' disabled={!isEnabled} onClick={this.sendToDb}>Submit</Button>
                                </CardActions>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Review);