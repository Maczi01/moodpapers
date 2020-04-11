import React from 'react';
import Bar from "../components/Bar/Bar";

const UserPageTemplate = ({ children }) => (
    <>
        <Bar />
        {children}
    </>
);

export default UserPageTemplate;
