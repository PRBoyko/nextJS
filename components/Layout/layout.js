import React, { Fragment } from 'react';
import MainNav from './MainNav';

function Layout({children}) {
    return (
        <Fragment>
            <MainNav />
            {children}
        </Fragment>
    );
}

export default Layout;