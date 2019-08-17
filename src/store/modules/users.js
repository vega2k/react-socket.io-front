import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
// import dotenv from 'dotenv';

// // import io from 'socket.io-client';
// // dotenv.config();
// // const socket = io(process.env.REACT_APP_SOCKET_HOST);


const SET_USER = 'users/SET_USER';
const SET_LOGIN = 'users/SET_LOGIN';

export const actionCreators = {
  set_login: createAction(SET_LOGIN),
  set_user : createAction(SET_USER),
};

// actionCreators.set_userAsync = (username) => dispatch => {
//   socket.emit('add user', username);
//   dispatch(actionCreators.set_user());
// }

const initialState = Map({
    status: false,
    username : ""
});

export default handleActions(
  {
    [SET_USER]: (state, action) => state.set( 'username' , action.payload ),
    [SET_LOGIN]: (state) => state.set( 'status' , true )
  }, 
  initialState
);