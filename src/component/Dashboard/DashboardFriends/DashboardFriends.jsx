import React, {useState} from 'react';
import FriendLine from "./FriendLine";

const DashboardFriends = () => {
    const [friends, setFriends] = useState([
        {id: 1, name: "shawn peterson", action: "Finished the action", from: "Course 1", time: "9:30 PM", img: "profile1.PNG"},
        {id: 2, name: "mary v.robinson", action: "Asked question", from: "Question 1?", time: "9:20 PM", img: "profile2.PNG"},
        {id: 3, name: "joe ramos", action: "Finished the exam", from: "Exam 1", time: "7:45 PM", img: "profile3.PNG"},
        {id: 4, name: "sean walker", action: "Answered question", from: "Question 1?", time: "11:15 AM", img: "profile4.PNG"}
    ]);

    return (
        <div className="dashboard-friends">
            <div className="dc-textrow dashboard-friends-title">
                friends activity
            </div>
            {friends.map(item=><FriendLine item={item} key={item.id}></FriendLine>)}
            <div className="dc-show-more">Show more</div>
        </div>
    );
};

export default DashboardFriends;