import React from 'react';

const socialLink = (props) => {

    const anchorStyle = {
        margin: '0 10px',
        boxShadow: 'none',
        color: 'tomato'
    }

    return (
        <a
            href={props.to}
            style={anchorStyle}
            onMouseOver={props.handleIcons}
            onMouseLeave={props.handleNoIcon}
        >
            {props.children}
        </a>
    );
}

export default socialLink;