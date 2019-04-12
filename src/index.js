import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';
import * as actions from './store/actions';
import countReducer from './store/reducers/count.reducer';
import effectsReducer from './store/reducers/effects.reducer'

let combine = combineReducers({
    countX : countReducer,
    effectsX : effectsReducer
})

let store = createStore(combine);
ReactDOM.render(<Provider store={store}><Counter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
