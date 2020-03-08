import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({user}) => {

    if (user) {
        return (
            <div data-testid="nav">
                <div data-testid="nav:logout-link">
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        );
    }

    return (
        <div data-testid="nav">
            <div data-testid="nav:login-link">
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
};

export default Navigation;
