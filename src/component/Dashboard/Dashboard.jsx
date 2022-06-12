import React, {useState} from 'react';
import ProfileInfo from "./ProfileInfo";
import DashboardModeSwitchItem from "./DashboardModeSwitchItem";
import DashboardModeSwitchContainer from "./DashboardModeSwitchContainer";
import Page404 from "../ErrorPages/Page404";

const Dashboard = () => {
    const [modes, setModes] = useState(["knowledge", "course", "exam", "q&a", "news", "activity", "friends"]);
    const [activeMode, setActiveMode] = useState("knowledge");

    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <div className="ps-3 d-flex border-bottom">
                {modes.map(item =>
                    <DashboardModeSwitchItem
                        name={item}
                        key={item}
                        onClick={(e)=>{
                            e.preventDefault();
                            setActiveMode(item);
                        }}
                        active={activeMode}
                    >

                    </DashboardModeSwitchItem>)}
            </div>
            {
                activeMode === "knowledge" ?
                    <DashboardModeSwitchContainer></DashboardModeSwitchContainer> :
                    <Page404></Page404>
            }
        </div>
    );
};

export default Dashboard;