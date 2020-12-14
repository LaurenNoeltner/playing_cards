import React from 'react';
import { Link } from "react-router-dom";


const Start = () => {
    return (
        <div className="row">
            <div className="col-12">
                <Link to="/CardTable">Start Game of War</Link>
            </div>
        </div>
    );
};

export default Start;