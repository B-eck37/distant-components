import {createStore} from 'redux';
import reducer from './ducks/reducer';

// const reducer = state => state;

// const store = createStore(reducer, initialState);


const store = createStore(reducer);

export default store;