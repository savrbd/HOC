import React from "react";
import PropTypes from "prop-types";
const ComponentAuth = ({ onLogOut }) => {
    return (
        <button type="button" className="btn btn-primary" onClick={onLogOut}>
            Выйти из системы
        </button>
    );
};
ComponentAuth.propTypes = {
    onLogOut: PropTypes.func
};
export default ComponentAuth;
