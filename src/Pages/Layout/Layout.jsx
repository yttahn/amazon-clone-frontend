import React from 'react';
import Header from '../../Components/Header/Header'

function Layout ({children})  {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
