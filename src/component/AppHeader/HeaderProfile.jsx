import React from 'react';
import Logo from '../../images/politeh_ava.jpg';

const HeaderProfile = () => {
    return (
            <a className='navbar-brand header-profile d-flex flex-row m-0 p-0'
               href="/dashboard">
                <img className="p-2 ms-1 rounded-circle"
                     src={Logo}
                     alt=""
                     height="76"
                     width="76"/>
                <p className="my-auto text-white me-2">ROMAN SKRYPCHUK</p>
            </a>
    );
};

export default HeaderProfile;