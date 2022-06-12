import React from 'react';
import {Link} from "react-router-dom";

const LeftNavItem = (props) => {
    let mainClasses = "nav-item py-1 w-100";
    let linkClasses = "nav-link py-3 ps-4";
    let svgColor = "#96a6a7";
    let textClasses = "menu-title ps-4";
    if(props.item.id === 1)
        mainClasses += " pt-4";
    if(props.activeId === props.item.id)
    {
        linkClasses += " sidebar-active";
        svgColor = "#2ecc71";
        textClasses += " menu-title-active";
    }

    const href = `/${props.item.title}`;

    return (
        <li className={mainClasses}>
            <Link className={linkClasses}
               to={href}
               onClick={props.onClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={svgColor}
                     className={props.item.name} viewBox="0 0 16 16">
                    <path d={props.item.path}/>
                    <path d={props.item.path2}/>
                </svg>
                <span className={textClasses}>{props.item.title}</span>
            </Link>
        </li>
    );
};

export default LeftNavItem;