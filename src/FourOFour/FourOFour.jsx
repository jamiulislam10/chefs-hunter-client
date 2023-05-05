import React from 'react';
import './FourOFour.css'
import four from '../../public/404-Not-Found-SVG (1)  g.png'
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';
const FourOFour = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='four'>
        <img src={four} alt="" />
     </div>
            <Footer></Footer>
        </div>
    );
};

export default FourOFour;