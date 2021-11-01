import React from "react";

const withLogin = (Component1, Component2) => (props) => {
    const isAuth = localStorage.getItem("user");
    return (
        <>
            {isAuth ? <Component1 {...props} /> : <Component2 {...props}/>}
        </>
    );
};

export default withLogin;
