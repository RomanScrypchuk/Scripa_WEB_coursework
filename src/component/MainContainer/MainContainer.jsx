import React from 'react';
import Dashboard from "../Dashboard/Dashboard";
import {Route, Routes} from "react-router-dom";
import Page404 from "../ErrorPages/Page404";
import Page403 from "../ErrorPages/Page403";

const MainContainer = () => {
    return (
        <div className="main-container border-top">

            <Routes>
                <Route exact path='/' element={<Dashboard/>}></Route>
                <Route exact path='/dashboard' element={<Dashboard/>}></Route>
                <Route exact path='/course' element={<Page404/>}></Route>
                <Route exact path='/exam' element={<Page404/>}></Route>
                <Route exact path='/news' element={<Page404/>}></Route>
                <Route exact path='/q&a' element={<Page404/>}></Route>
                <Route exact path='/profile' element={<Page404/>}></Route>
                <Route exact path='/notifications' element={<Page404/>}></Route>
                <Route exact path='/comments' element={<Page404/>}></Route>
                <Route exact path='/exit' element={<Page404/>}></Route>
                <Route exact path='/edit' element={<Page404/>}></Route>
                <Route exact path='*' element={<Page403/>}></Route>
            </Routes>
        </div>
    );
};

export default MainContainer;