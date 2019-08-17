import React from 'react';
import PropTypes from 'prop-types';

const MessageBody = ({username, message}) => {
    return (
        <div>
            <span className="username">{username}</span>
            <span className="messageBody">{message}</span>
        </div>
    );
}

MessageBody.propTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default MessageBody;