import React from 'react';
import { Link } from 'react-router';



const EditLink = ({ id, children }) => (
    <Link
        to={'/edit/' + id}
    >
        {children}
    </Link>
);

export default EditLink;