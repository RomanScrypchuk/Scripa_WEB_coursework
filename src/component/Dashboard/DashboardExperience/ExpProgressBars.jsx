import React from 'react';

const ExpProgressBars = (props) => {

    return (
        <div className="exp-progress-bars d-flex flex-column align-items-center py-2">
            <div className="vertical">
                <div className="vertical-bar" style={{height: props.info.prc + '%'}}></div>
            </div>
            <p className="exp-progress-title text-center">
                {props.info.name}
            </p>
        </div>
    );
};

export default ExpProgressBars;