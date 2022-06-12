import React, {useState} from 'react';
import DcHeadline from "./DCHeadline";
import DCTextRow from "./DCTextRow";
import {Link} from "react-router-dom";

const DashboardCard = (props) => {
    const [colors, setColors] = useState({col1text: props.info.color, col1bg: "white",
        col2text: "", col2bg: ""});
    const [text, setText] = useState(props.text);
    const changeActive = () =>
    {
        setColors({col2text: colors.col1text, col2bg: colors.col1bg,
            col1text: colors.col2text, col1bg: colors.col2bg});
        let newText = text.map(text=>text+"a");
        setText(newText);
    }

    return (
        <div className="dashboard-card">
            <DcHeadline info={props.info} func={changeActive} colors={colors}></DcHeadline>
            {text.map(item =>
                <DCTextRow text={item} color={props.info.color}></DCTextRow>)}
            <div className="dc-show-more">
                <Link to="/nothing">Show more</Link>
            </div>
        </div>
    );
};

export default DashboardCard;