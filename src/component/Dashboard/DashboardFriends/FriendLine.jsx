import React, {useState} from 'react';

const FriendLine = (props) => {
    const [image, setImage] = useState();
    import(`../../../images/${props.item.img}`).then(img => setImage(img.default));
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <div className="dc-textrow friends-textrow d-flex"
             style={{
                 color: isHovered ? 'black' : 'inherit',
                 borderLeft: isHovered ? '#a60fec 5px solid' : 'none',
                 background: isHovered ? '#eaecec' : 'white'
             }}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <img src={image}
                 alt=""
                 width={30}
                 height={30}
            />
            <p className="dashboard-friends-name">
                {props.item.name}
            </p>
            <p>
                {props.item.action + ": "}
                <span className="bold-n-black">
                    {props.item.from}
                </span>
            </p>
            <p className="ms-auto me-3">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="12" height="12"
                     fill="gray"
                     className="bi bi-clock me-1 p-0"
                     viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
                {props.item.time}
            </p>
        </div>
    );
};

export default FriendLine;