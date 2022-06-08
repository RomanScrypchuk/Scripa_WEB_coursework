import React from 'react';
import HeaderProfile from "./HeaderProfile";
import HeaderTaskBar from "./HeaderTaskBar";
import '../../css/styles.css';

const AppHeader = () => {
    return (
        <div className="navbar fixed-top m-0 p-0 d-flex flex-row">
            <HeaderProfile></HeaderProfile>
            <HeaderTaskBar></HeaderTaskBar>
        </div>
    );
};

export default AppHeader;