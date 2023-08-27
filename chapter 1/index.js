import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

//action name constants
const init = 'init';
const inc = 'increment';
const dec = 'decrement';
const incByAmount = 'incrementByAmount';

//store
const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

const history = [];

/**
 * * The reducer is basically function that take the current state as previous state and with the action it will change the state
 * * Don't change the state directly make a copy of that state and change that.
 */

// reducer
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// Global state

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

//Async API Call

// async function getUser() {
//   const { data } = await axios.get('http://localhost:3000/accounts/1');
//   console.log(data);
// }

// getUser();

//Action creators
async function initUser(dispatch, getState) {
  const { data } = await axios.get('http://localhost:3000/accounts/1');
  dispatch({ type: init, payload: data.amount });
}
function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}

setTimeout(() => {
  store.dispatch(initUser);
}, 2000);
