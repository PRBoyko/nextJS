import React, { Fragment } from 'react';
import MainNav from './mainNav';

function Layout({children}) {
    return (
        <Fragment>
            <MainNav />
            {children}
        </Fragment>
    );
}

export default Layout;