import React from 'react';

import '../styles/components/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="logo">
                Logo
            </div>
            <nav>
                <a href="/#">Dashboard</a>
                <a href="/#">Finance</a>
                <a href="/#">WC Audits</a>
                <a href="/#">Claims</a>
                <a href="/#">Admin</a>
            </nav>
        </div>
    );
}

export default Header;
