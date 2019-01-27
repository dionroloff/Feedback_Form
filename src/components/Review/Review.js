//Review.js
// This will be the current redux values displayed on the DOM
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeelings from './ReviewFeelings.js';
import ReviewUnderstanding from './ReviewUnderstanding.js';
import ReviewSupport from './ReviewSupport.js';
import ReviewComments from './ReviewComments';
//Material UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Review extends Component {

    constructor() {
        super(); {
            this.state = {
                value: '',
            }
        }
    }

    render() {
        return (
            <div className='review-card'>
                <Card>
                    <CardContent >
                        <Typography color='textPrimary'>
                            <h2>Review Your Feedback</h2>
                        </Typography>
                        <Typography color='textSecondary'>
                            <ReviewFeelings />
                            <ReviewUnderstanding />
                            <ReviewSupport />
                            <ReviewComments />
                        </Typography>
                        <CardActions>
                            <Button disabled={!this.state.value}>Incomplete</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Review);