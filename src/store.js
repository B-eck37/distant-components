import {createStore} from 'redux';

const reducer = state => state;

// const store = createStore(reducer, initialState);

const initialState = {
    loggedInAs: 'B',
    isCreditCardHolder: true,
}

const store = createStore(reducer, initialState);

export default store;