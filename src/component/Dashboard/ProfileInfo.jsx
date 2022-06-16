import React from 'react';
import Avatar from '../../images/politeh_ava.jpg';
import StarRating from "../StarRating/StarRating";
import {Link} from "react-router-dom";
import data from './data.json';

const ProfileInfo = () => {
    return (
        <div className="d-flex flex-row">
            <div className="float-sm-start pe-3 profile-avatar">
                <img className="p-2 rounded-circle" alt="" src={Avatar} width="100" height="100"/>
            </div>
            <div className="ps-3 pe-3 m-0 align-self-center">
                <p className="float-start profile-name m-0 d-flex">
                    {data.ProfileInfo.name}
                    <StarRating></StarRating>
                </p>
                <p className="profile-additional-text m-0">{data.ProfileInfo.act} •
                    <a className="link-primary" href="#"> Learn more</a>
                </p>
                <div className="profile-additional-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gray"
                         className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                    </svg>
                    <span className="ps-1 pt-1">{data.ProfileInfo.exp} exp</span>
                </div>
            </div>
            <div className="profile-buttons mt-5 me-5">
                <Link to="/edit" id="pencil" className="button rounded-circle m-2 p-2" title="Pencil">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey"
                         className="bi bi-pencil" viewBox="0 0 16 16">
                        <path
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                </Link>
                <Link to="/exit" id="exit" className="button rounded-circle m-2 p-2" title="Log out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey"
                         className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fillRule="evenodd"
                              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ProfileInfo;