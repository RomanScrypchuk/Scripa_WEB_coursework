import React, {useState} from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const DashboardPlot = (props) => {
    const [height, setHeight] = useState(props.height);
    const [width, setWidth] = useState(props.width);
    const data = [
        {x : 12, y : 1.8},
        {x : 13, y : 2},
        {x : 14, y : 1},
        {x : 15, y : 0.1},
        {x : 16, y : 1.2},
        {x : 17, y : 3.2},
        {x : 18, y : 3.9},
        {x : 19, y : 2.8},
        {x : 20, y : 2},
        {x : 21, y : 2.4},
        {x : 22, y : 3.7}
    ];

    return (
        <div className="pe-3" style={{height: 120, width: '100%'}}>
            <ResponsiveContainer width='99%'>
                <LineChart width={400} height={90} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="y" stroke="#2ecc71" />
                    <XAxis dataKey="x"/>
                    <YAxis dataKey="y" interval={1}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardPlot;