import { combineReducers } from 'redux';
import users from 'store/modules/users';
import chat from 'store/modules/chat';

export default combineReducers({
    users,
    chat
});
