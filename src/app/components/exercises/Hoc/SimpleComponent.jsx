import React, { useState } from "react";
import Component1 from "./ComponentAuth";
import Component2 from "./ComponentNotAuth";
import withLoginUser from "./withLoginUser";
import withPropsStyles from "../../examples/hoc/withPropsStyles";

const SimpleComponent = () => {
    const [isAuth, setIsAuth] = useState();
    console.log(isAuth);
    const onLogin = () => {
        setIsAuth("user");
        localStorage.setItem("user", "savr");
    };
    const onLogOut = () => {
        setIsAuth("");
        localStorage.removeItem("user");
    };
    const ComponentWithAuth = withLoginUser(Component1, Component2);
    const NewComponent = withPropsStyles(ComponentWithAuth);
    return <NewComponent onLogOut={onLogOut} onLogin={onLogin} />;
};

export default SimpleComponent;
