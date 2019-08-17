import { createAction, handleActions } from 'redux-actions';
import { Map ,List } from 'immutable';

const ADD_CHAT = 'chat/ADD_CHAT';

export const actionCreators = {
  add_chat: createAction(ADD_CHAT)
};

const initialState = Map({
    logs: List([])
});

export default handleActions(
  {
    [ADD_CHAT]: (state, action) => state.set( 'logs' , state.get('logs').push(Map(
        { 
            type : action.payload.type,
            username : action.payload.username,
            data : action.payload.data
        }
    ))),
  }, 
  initialState
);