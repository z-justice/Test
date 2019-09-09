import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ZY from '../src/router';

import reducer from './reducer'
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

let store = createStore(reducer)

ReactDOM.render(<Provider store={store}><ZY/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
