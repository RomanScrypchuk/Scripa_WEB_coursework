import React from 'react';
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import {BrowserRouter as Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import MainContainer from "../MainContainer/MainContainer";

const AppBody = () => {
    const history = createBrowserHistory();
    return (
        <div>
            <Router history={history}>
                <LeftNavBar></LeftNavBar>
                <MainContainer></MainContainer>
            </Router>
        </div>
    );
};

export default AppBody;