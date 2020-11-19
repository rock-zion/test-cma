import { combineReducers } from 'redux';
import { getUsers, getUser } from './getUsers';

export default combineReducers({
  getUsers,
  getUser
});
