import React, {useState} from 'react';
import ExpProgressBars from "./ExpProgressBars";

const ExpProgress = () => {

    const [expTitles, setExpTitles] = useState([
        {id:1, name:"course", prc:70},
        {id:2, name:"question", prc:33},
        {id:3, name:"exam", prc:45}
    ]);

    const [expAmount, setExpAmount] = useState("+142");

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