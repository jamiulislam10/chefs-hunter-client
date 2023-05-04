import React from 'react';
import pic from '../../../public/Chicken-Fried-Rice.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/images/methode/2018/10/08/453aa764-caa1-11e8-9460-2e07e264bd11_1280x720_155251.jpg?itok=qzPzHWim")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About</h1>
            <p className="mb-5">The self-taught chef, who fled his country's civil war in 1999, nonetheless believes that promoting Lebanon's culinary riches means combining them with some of "the elegance and refinement" of French cuisine.</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;