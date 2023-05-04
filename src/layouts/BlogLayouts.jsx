import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Blog from '../pages/Blog/Blog';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const BlogLayouts = () => {
    return (
        <div>
           <NavigationBar></NavigationBar>
           <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default BlogLayouts;