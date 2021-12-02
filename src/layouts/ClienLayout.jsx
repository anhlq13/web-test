import React from 'react';
import {Header, Footer} from '../components/common';
import Scroll from '../Scroll';

const ClienLayout = ({children}) => {

    return (
        <div className="container">
            <Header />
            <Scroll />
            {children}
            <Footer />
        </div>
    );
};

export default ClienLayout;