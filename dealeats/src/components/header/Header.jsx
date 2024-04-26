import React from 'react';
import './Header.css';
/*import Button from './Button';*/



const HeaderComponent = () => {

    return (

        <header className="header">

            <div className="logo">
                <img src="dealeatslogo.png" alt="dealeatslogo" />
            </div>

            
                <div className="button-container">
                    <button className="primary">sign up</button>
                    <button className="outline">sign in</button>
                </div>
            
        </header>
    );
};

export default HeaderComponent;
