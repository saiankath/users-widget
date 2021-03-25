import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducer from './Components/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from "redux-thunk"
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));    

ReactDOM.render(
   <Provider store={store}> <App /> </Provider>, document.getElementById('root') );