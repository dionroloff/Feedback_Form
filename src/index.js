import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';

//My reducers

//This reducer will run when user clicks submit on feelings page
const feelingReducer = (state = '', action) => {
    if (action.type === 'SUBMIT_FEELINGS') {
        console.log('in feelingReducer');
        return action.payload;
    }
    return state;
} //end feelingsReducer

//This reducer will run when the user clicks submit on understanding page
const understandingReducer = (state = '', action) => {
    if (action.type === 'SUBMIT_UNDERSTANDING') {
        console.log('in understandingReducer');
        return action.payload;
    }
    return state;
} //end understandingReducer

//This reducer will run when the user clicks submit on the support page
const supportReducer = (state = '', action) => {
    if (action.type === 'SUBMIT_SUPPORT') {
        console.log('in supportReducer');
        return action.payload;
    }
    return state;
} //end supportReducer

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
