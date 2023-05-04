import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Blog from '../pages/Blog/Blog';

const LoginLayouts = () => {
    return (
        <div>
          <NavigationBar></NavigationBar>
        <Outlet></Outlet>
       <Footer></Footer>
        </div>
    );
};

export default LoginLayouts;