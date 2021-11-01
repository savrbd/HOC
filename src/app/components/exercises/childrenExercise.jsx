import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <FormComponent>
                <Component />
                <Component />
                <Component />
            </FormComponent>
        </CollapseWrapper>
    );
};

const Component = (child) => {
    return <div>{child.number} Компонент списка</div>;
};
const FormComponent = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        const j = i + 1;
        const config = {
            ...child.props,
            number: j
        };
        return React.cloneElement(child, config);
    });
};

export default ChildrenExercise;
