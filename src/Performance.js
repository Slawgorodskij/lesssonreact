import React from 'react';

const Performance = ({title}) => {
    return (
        <div className="performance">
            <div className="container">
                <h1 className="performance__title">{title}</h1>
            </div>
        </div>
    );
};

export default Performance;