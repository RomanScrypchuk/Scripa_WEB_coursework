import React, {useState} from 'react';
import ExpProgressBars from "./ExpProgressBars";
import data from "./data.json";

const ExpProgress = () => {

    const [expTitles, setExpTitles] = useState([
        {id:1, name:"course"},
        {id:2, name:"question"},
        {id:3, name:"exam"}
    ]);

    return (
        <div className="d-flex exp-progress">
            {expTitles.map(item => <ExpProgressBars info={item} prc={data.ExpProgress.prc[item.id-1]} key={item.id}></ExpProgressBars>)}
            <div className="exp-progress-amount">
                <div className="mb-2 number">
                    {data.ExpProgress.expAmount}
                </div>
                <p className="exp-progress-title text-center">
                    LAST MONTH
                </p>
            </div>
        </div>
    );
};

export default ExpProgress;