import React, {useState} from 'react';
import FriendLine from "./FriendLine";
import {Link} from "react-router-dom";
import data from './data.json';

const DashboardFriends = () => {
    return (
        <div className="dashboard-friends">
            <div className="dc-textrow dashboard-friends-title">
                friends activity
            </div>
            {data.friends.map(item=><FriendLine item={item} key={item.id}></FriendLine>)}
            <div className="dc-show-more">
                <Link to="/nothing">Show more</Link>
            </div>
        </div>
    );
};

export default DashboardFriends;