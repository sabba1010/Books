import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Root = () => {
    return (
        <div className=' mx-auto'>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;