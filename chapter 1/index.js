import { createStore } from 'redux';

//store
const store = createStore(reducer);

/**
 * * The reducer is basically function that take the current state as previous state and with the action it will change the state
 * *
 *
 *
 */

// reducer
function reducer(state = { amount: 1 }, action) {
  return state;
}

// Global state
console.log(store.getState());

{
  type: 'incremanet';
}
