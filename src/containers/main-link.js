import React from 'react';
import { Link } from 'react-router';



const MainLink = ({ children }) => (
    <Link
        to={'/main'}
    >
        {children}
    </Link>
);

export default MainLink;