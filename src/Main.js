import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            Hello World
            <Link to="/room">Go to Room</Link>
        </div>
    );
};

export default Main;