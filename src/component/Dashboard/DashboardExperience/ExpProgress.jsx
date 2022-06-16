import React, {useState} from 'react';
import ExpProgressBars from "./ExpProgressBars";
import data from "./data.json";

const ExpProgress = () => {

    const [expTitles, setExpTitles] = useState([
        {id:1, name:"course", prc:data.ExpProgress.prc[0]},
        {id:2, name:"question", prc:data.ExpProgress.prc[1]},
        {id:3, name:"exam", prc:data.ExpProgress.prc[2]}
    ]);

    const [expAmount, setExpAmount] = useState(data.ExpProgress.expAmount);

    return (
        <div className="d-flex exp-progress">
            {expTitles.map(item => <ExpProgressBars info={item} key={item.id}></ExpProgressBars>)}
            <div className="exp-progress-amount">
                <div className="mb-2 number">
                    {expAmount}
                </div>
                <p className="exp-progress-title text-center">
                    LAST MONTH
                </p>
            </div>
        </div>
    );
};

export default ExpProgress;