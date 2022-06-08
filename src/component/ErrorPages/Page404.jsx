import React from 'react';
import GIF from '../../images/404.gif';

const Page404 = () => {
    return (
        <div className="error-404 mt-5">
            <img src={GIF} alt="" height="600" width="800"/>
            <p className="error-warning">This page is under construction!</p>
        </div>
    );
};

export default Page404;