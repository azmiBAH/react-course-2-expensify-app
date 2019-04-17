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

store.dispatch(addExpense({ description: 'Water Bill' , amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent' , amount: 109500 }));
// store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


// .2
const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
);

                //3
ReactDOM.render(jsx, document.getElementById("root"));