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

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
