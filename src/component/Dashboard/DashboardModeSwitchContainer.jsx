import React, {useState} from 'react';
import DashboardCard from "./DashboardCard/DashboardCard";
import DashboardExperience from "./DashboardExperience/DashboardExperience";
import DashboardFriends from "./DashboardFriends/DashboardFriends";
import data from "./data.json";

const DashboardModeSwitchContainer = () => {
    const [cardsInfo, setCardsInfo] = useState([
        {id: 1, col1Name: "done course", col2Name: "unfinished course", col1Amount: "12", col2Amount: "3", color: "#ec8d0f"},
        {id: 2, col1Name: "asking questions", col2Name: "answered questions", col1Amount: "27", col2Amount: "7", color: "#a60fec"},
        {id: 3, col1Name: "following exams", col2Name: "done exams", col1Amount: "19", col2Amount: "88", color: "#49b691"}
    ]);

    const [text, setText] = useState(data.DashboardModeSwitchContainer.text);

    return (
        <div className="dashboard-container">
            <div className="d-flex">
                {cardsInfo.map(item =>
                    <DashboardCard
                    info={item}
                    key={item.id}
                    text={text[item.id-1]}>
                    </DashboardCard>)}
            </div>
            <div className="d-flex">
                <DashboardExperience></DashboardExperience>
                <DashboardFriends></DashboardFriends>
            </div>
        </div>
    );
};

export default DashboardModeSwitchContainer;