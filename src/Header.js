import React from 'react';

const Header = ({slogan}) => {
    return (
        <div className="header">
                <div className="container">
                    <p>{slogan}</p>
                </div>
        </div>
    );
};

export default Header;