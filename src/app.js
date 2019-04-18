import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux'; // <- this .1


import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize-css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


// redux store - give access to dispatch, getState, subscribe
const store = configureStore();

// .2
const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
);

                //3
ReactDOM.render(jsx, document.getElementById("root"));