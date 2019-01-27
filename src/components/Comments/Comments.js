//Comments.js
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
                <Card>
                    <CardContent>

                        <Typography color="textPrimary">
                            <h1>Any comments you want to leave?</h1>
                        </Typography>

                        <Typography variant="h5" component="h2">
                            <TextField
                                id='commentsInput'
                                label='Comments?'
                                placeholder='Write here.'
                                multiline margin='normal' />
                        </Typography>

                    </CardContent>
                    <CardActions>
                    <Button id='comments-next-btn' variant='contained' color='primary'>
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

export default connect(mapReduxStoreToProps)(Comments);