import { combineReducers } from 'redux';

import { usersReducer, postsReducer } from './reducer';

export default combineReducers({
    users: usersReducer,
    posts: postsReducer
});