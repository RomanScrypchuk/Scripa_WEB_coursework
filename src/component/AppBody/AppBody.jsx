import React from 'react';
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import MainContainer from "../MainContainer/MainContainer";

const AppBody = () => {
    return (
        <div>
            <LeftNavBar></LeftNavBar>
            <MainContainer></MainContainer>
        </div>
    );
};

export default AppBody;