import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
const ViewLayOuts = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default ViewLayOuts;