import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';
import data from './data.json';

const DashboardPlot = () => {
    return (
        <div className="pe-3" style={{height: 120, width: '100%'}}>
            <ResponsiveContainer width='99%'>
                <LineChart width={400} height={90} data={data.DashboardPlot.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="y" stroke="#2ecc71" />
                    <XAxis dataKey="x"/>
                    <YAxis dataKey="y" interval={1}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardPlot;