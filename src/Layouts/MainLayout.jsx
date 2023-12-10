import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section></section>
        </div>
    );
};

export default MainLayout;