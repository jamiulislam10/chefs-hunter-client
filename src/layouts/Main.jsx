// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet,useNavigation } from 'react-router-dom';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            <div>{navigation.state === 'loading' && 'Loading sssssssss...' }</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;