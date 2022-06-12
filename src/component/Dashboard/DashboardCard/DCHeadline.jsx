import React, {useState} from 'react';

const DcHeadline = (props) => {

    return (
        <div className="dc-headline d-flex">
            <div onClick={props.func} className="dc-active" style={{color : props.colors.col1text, background: props.colors.col1bg}}>
                <p className="dc-headline-amount">{props.info.col1Amount}</p>
                <p className="dc-headline-name">{props.info.col1Name}</p>
            </div>
            <div onClick={props.func} style={{color : props.colors.col2text, background: props.colors.col2bg}}>
                <p className="dc-headline-amount">{props.info.col2Amount}</p>
                <p className="dc-headline-name">{props.info.col2Name}</p>
            </div>
        </div>
    );
};

export default DcHeadline;