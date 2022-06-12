import React, {useState} from 'react';

const DcTextRow = (props) => {
    const [borderLColor, setBorderLColor] = useState(`${props.color} 5px solid`);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="dc-textrow"
             style={{
                 color: isHovered ? 'black' : 'inherit',
                 borderLeft: isHovered ? borderLColor : 'none',
                 background: isHovered ? '#eaecec' : 'white'
             }}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <p>{props.text}</p>
        </div>
    );
};

export default DcTextRow;