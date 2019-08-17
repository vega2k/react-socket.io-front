import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginWrap from 'components/LoginWrap.js';
import { actionCreators } from 'store/modules/users';
import { actionCreators as chatActionCreators } from 'store/modules/chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class LoginWrapContainer extends Component {
  
    set_user = (event) => {
        const { UserActions, ChatActions, socket } = this.props;
        let usernameInputValue = event.target.value;
        if( event.which === 13 && usernameInputValue ){
            socket.emit('add user', usernameInputValue);
            UserActions.set_user(usernameInputValue);
            UserActions.set_login();
            ChatActions.add_chat({
                type : "log",
                username : usernameInputValue,
                data : `당신의 닉네임 : ${usernameInputValue}`
            });
        }
    }


    render() {
        return (
        <LoginWrap
            set_user={this.set_user}
            status = {this.props.status}
        />
        );
    }
}

LoginWrapContainer.propTypes = {
    socket: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        username: state.users.get('username'),
        status: state.users.get('status'),
    }),
    (dispatch) => ({
        UserActions : bindActionCreators(actionCreators, dispatch),
        ChatActions : bindActionCreators(chatActionCreators, dispatch)
    })
)(LoginWrapContainer);