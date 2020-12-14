import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="row">
            <div className="col-12">
             Game: War
             <Link to="/">Link to home</Link>
            </div>
        </div>
    );
};

export default Header;