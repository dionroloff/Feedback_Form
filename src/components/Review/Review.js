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

    // constructor() {
    //     super(); {
    //         this.state = {
    //             isEnabled: '',
    //         }
    //     }
    // }

    turnOnButton = () => {
        
    }

    render() {

        const isEnabled = this.props.reduxStore.commentsReducer !== '';

        const bull = <p>•</p>;
        return (
            <div className='review-card'>
                <Card>
                    <CardContent >
                        <Typography color='textPrimary'>
                            <h2>Review Your Feedback</h2>
                        </Typography>
                        <Typography color='textSecondary'>
                            {bull}
                            <ReviewFeelings />
                            {bull}
                            <ReviewUnderstanding />
                            {bull}
                            <ReviewSupport />
                            {bull}
                            <ReviewComments />
                            {bull}
                        </Typography>
                        <CardActions>
                            <Button disabled={!isEnabled}>Submit</Button>
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