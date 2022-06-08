import React from 'react';

const LeftNavItem = (props) => {
    let mainClasses = "nav-item py-1 w-100"
    if(props.item.id === 1)
        mainClasses += " pt-4";

    return (
        <li className={mainClasses}>
            <a className="nav-link py-3 ps-4" href="index.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#96a6a7"
                     className={props.item.name} viewBox="0 0 16 16">
                    <path d={props.item.path}/>
                    <path d={props.item.path2}/>
                </svg>
                <span className="menu-title ps-4">{props.item.title}</span>
            </a>
        </li>
    );
};

export default LeftNavItem;