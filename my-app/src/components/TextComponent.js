import React from 'react';

const TextComponent = (props) => {
    return (
        <div>
            <h1 style={{ color: 'red' }}>{props.name}</h1>
            <h1 style={{ color: 'blue' }}>{props.age}</h1>
        </div>
    );
};

export default TextComponent;
