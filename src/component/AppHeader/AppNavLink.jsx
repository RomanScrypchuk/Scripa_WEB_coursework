import React from 'react';
import {Link} from "react-router-dom";

const AppNavLink = (props) => {
    return (
        <li className="nav-item mx-2">
            <a href={props.icon.to} className="nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#96a6a7"
                     className={props.icon.name} viewBox="0 0 16 16">
                    <path d={props.icon.path}/>
                    <path d={props.icon.path2}/>
                </svg>
            </a>
        </li>
    );
};

export default AppNavLink;