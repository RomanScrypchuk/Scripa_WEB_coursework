import React from 'react';
import ExpProgress from "./ExpProgress";
import DashboardPlot from "./DashboardPlot";

const DashboardExperience = () => {

    return (
        <div className="dashboard-experience">
            <p className="exp-title">Experience gained</p>
            <ExpProgress></ExpProgress>
            <p className="exp-title">Experience per day</p>
            <DashboardPlot></DashboardPlot>
        </div>
    );
};

export default DashboardExperience;