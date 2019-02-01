import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ThankYou extends Component {

    returnToStart = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={9}>
                    <Card>
                        <CardContent>
                            <Typography color='textPrimary'>
                                <h1>Thank You!</h1>
                            </Typography>

                            <Grid container justify="center">
                                <CardActions>
                                    <Button onClick={this.returnToStart} id='feedback-btn' variant='contained' color='primary'>Leave New Feedback</Button>
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

export default connect(mapReduxStoreToProps)(ThankYou);