import React from 'react';
import './Header.css'
import profile from './../../images/profile.png';

const Header = () => {
    return (
        <nav className="header">
            <h4>Knowledge Cafe</h4>
            <div>
                <a href='/home'>Home</a>
                <a href='/home'>Book</a>
                <a href='/home'>Contact</a>
                <a href='/login'><img src={profile}></img></a>
            </div>
        </nav>
    );
};

export default Header;