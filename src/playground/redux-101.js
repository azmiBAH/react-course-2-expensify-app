import { createStore } from 'redux';

// ACTION GENERATORS - function that return action objects
const incrementCount = ( { incrementBy = 1 }  = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count

});

const reset = () => ({
  type: 'RESET',
  count: 0
});


// REDUCER - state changes sent to store
// 1. Reducers are pure function : output determind by the input
const countReducer = ( state = {count : 0}, action ) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT': 
      return {
        count: state.count - action.decrementBy
      };
    
    case 'SET': 
      return {
        count: action.count
      }
    
    case 'RESET': 
      return {
        count: 0
      };
    
    default:
      return state;
  }
};

const store = createStore(countReducer);

// SUBSRICBE - WATCH CHANGES TO REDUX STATE
// gets called everytime the store changes
//  use unsubscribe variable call to stop watching changes
 const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})


//Actions
 
//increment
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch( reset() );

store.dispatch( decrementCount() );

store.dispatch( decrementCount({ decrementBy: 10 }) );

store.dispatch( setCount({ count: 101 }));