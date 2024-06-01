import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/planets">Search Planets</Link></li>
                <li><Link to="/starships">Search Starships</Link></li>
                <li><Link to="/people">Search People</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
