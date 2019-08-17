import React from 'react';
import PropTypes from 'prop-types';

const LoginWrap = ({set_user, status}) => {
    const display = status ? "none" : "block"; 
    return (
        <li className="login page" style={{ "display" : display }}>
            <div className="form">
                <h3 className="title">닉네임을 입력하세요.</h3>
                <input className="usernameInput"
                onKeyPress={set_user}
                type="text" maxLength="14" />
            </div>
        </li>
    );
}

LoginWrap.propTypes = {
    set_user: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired
};


export default LoginWrap;