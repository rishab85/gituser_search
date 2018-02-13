import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
  return createStore(
    RootReducer,
    applyMiddleware(thunk)
  );
}
