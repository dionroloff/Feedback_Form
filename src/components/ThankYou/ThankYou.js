import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ThankYou extends Component {

    returnToStart = () => {
        this.props.history.push('/feeling');
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography color='textPrimary'>
                            <h1>Thank You!</h1>
                        </Typography>
                        <CardActions>
                            <Button onClick={this.returnToStart} id='feedback-btn' variant='contained' color='primary'>Leave New Feedback</Button>
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

export default connect(mapReduxStoreToProps)(ThankYou);