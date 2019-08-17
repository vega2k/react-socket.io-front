import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({add_chat}) => {
    return (
        <input className="inputMessage" 
            placeholder="Type here..." 
            onKeyPress={add_chat} />
    );
}

InputBox.propTypes = {
    add_chat: PropTypes.func.isRequired
};

export default InputBox;