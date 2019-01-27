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

class Supported extends Component {

    handleNextButton = () => {
        this.props.history.push('/comments');
    }

    render() {
        return(
            <div>
                <Card>
                    <CardContent>

                        <Typography color="textPrimary">
                            <h1>How well are you being supported?</h1>
                        </Typography>

                        <Typography variant="h5" component="h2">
                            <TextField
                                id='supportedInput'
                                label='Supported?'
                                placeholder='From 1 and 5'
                                multiline margin='normal' />
                        </Typography>

                    </CardContent>
                    <CardActions>
                    <Button id='supported-next-btn' onClick={this.handleNextButton} variant='contained' color='primary'>
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

export default connect(mapReduxStoreToProps)(Supported);