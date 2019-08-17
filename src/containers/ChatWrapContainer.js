import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { actionCreators } from 'store/modules/chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messages from 'components/Messages';
import InputBox from 'components/InputBox';

class ChatWrapContainer extends Component {

    componentDidMount() {
        const { ChatActions, socket } = this.props;

        socket.on('user joined', (data)=>{
            ChatActions.add_chat({
                type : "log",
                username : "notice",
                data : `${data.username}님이 접속하였습니다.`
            });
        });

        socket.on('new message', (data)=>{
            ChatActions.add_chat({
                type : "message",
                username : data.username,
                data : data.message
            });
        });

        socket.on('login', (data)=>{
            ChatActions.add_chat({
                type : "log",
                username : "notice",
                data : `현재인원 ( ${data.numUsers} )`
            });
        });

        socket.on('user left', (data)=>{
            ChatActions.add_chat({
                type : "log",
                username : data.username,
                data : `${data.username}님이 접속을 종료하였습니다.
                    현재인원 ( ${data.numUsers} )`
            });
        });

        
    }

    add_chat = (event) => {
        const { ChatActions, socket, username } = this.props;
        let inputMessage = event.target.value;
        if( event.which === 13 && inputMessage ){
            socket.emit('new message', inputMessage);
            ChatActions.add_chat({
                type : "message",
                username : username,
                data : inputMessage
            });
            event.target.value = "";
        }
    }

    render() {
        const display = this.props.status ? "block" : "none"; 
        return (
            <li className="chat page" style={{ "display" : display }}>
                <div className="chatArea">
                    <Messages logs={this.props.logs}/>
                </div>
                <InputBox add_chat={this.add_chat}/>
            </li>
        );
    }
}

ChatWrapContainer.propTypes = {
    socket: PropTypes.object.isRequired
};

export default connect(
    (state) => ({
        username: state.users.get('username'),
        status: state.users.get('status'),
        logs: state.chat.get('logs').toJS()
    }),
    (dispatch) => ({
        ChatActions : bindActionCreators(actionCreators, dispatch)
    })
)(ChatWrapContainer);