import React from 'react';
import MessageBody from 'components/MessageBody';
import PropTypes from 'prop-types';

const Messages = ({logs}) => {
    return (
        <ul className="messages">
            {logs.map( (log, key)=>{  
                return ( 
                    <li className={log.type} key={key} style={{ "display": "list-item" }}>
                        { log.type ==="log" ? log.data : 
                            <MessageBody
                            username = {log.username} 
                            message = {log.data}
                            />  
                        }
                    </li>
                )
            })}
        </ul>
    );
}

Messages.propTypes = {
    logs: PropTypes.array.isRequired
};

export default Messages;