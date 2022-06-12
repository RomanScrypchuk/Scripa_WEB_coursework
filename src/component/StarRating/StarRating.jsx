import React from 'react';

const StarRating = () => {
    return (
        <div className="rating ms-2 mt-1">
            <input type="radio" name="rating" id="rating-1"/>
            <label htmlFor="rating-1"></label>
            <input type="radio" name="rating" id="rating-2"/>
            <label htmlFor="rating-2"></label>
            <input type="radio" name="rating" id="rating-3"/>
            <label htmlFor="rating-3"></label>
            <input type="radio" name="rating" id="rating-4"/>
            <label htmlFor="rating-4"></label>
            <input type="radio" name="rating" id="rating-5"/>
            <label htmlFor="rating-5"></label>
        </div>
    );
};

export default StarRating;