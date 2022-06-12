import React from 'react';

const DashboardModeSwitchItem = (props) => {
    let switchClasses = "dashboard-switch p-3";
    if(props.name === props.active)
        switchClasses += " dashboard-switch-active";

    const href = `/${props.name}`

    return (
        <div className={switchClasses} onClick={props.onClick}>
            {props.name}
        </div>
    );
};

export default DashboardModeSwitchItem;