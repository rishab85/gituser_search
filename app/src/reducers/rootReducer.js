import {combineReducers} from 'redux';
import{items, hasError, isLoading, isActive} from './userReducer'

export default combineReducers({
  items,
  hasError,
  isLoading,
  isActive
})
