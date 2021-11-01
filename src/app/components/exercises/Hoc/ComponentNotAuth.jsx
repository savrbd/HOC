import React from "react";
import PropTypes from "prop-types";
const ComponentNotAuth = ({ onLogin }) => {
    return (
        <button type="button" className="btn btn-primary" onClick={onLogin}>Войти</button>);
};
ComponentNotAuth.propTypes = {
    onLogin: PropTypes.func
};
export default ComponentNotAuth;
