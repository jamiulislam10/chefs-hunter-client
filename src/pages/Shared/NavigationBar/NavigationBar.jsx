import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
                 <div className="navbar bg-base-100 m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Chefs Hunters</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>

                        <li tabIndex={0}>
                        </li>
                        <li><a>Blog</a></li>

                    </ul>
                </div>
                <div className="navbar-end m-4">
                    <a className="bt"><FaUserCircle style={{ fontSize: '2.5rem' }}></FaUserCircle></a>

                    <button className='btn btn-primary'><Link to='/login'>Login</Link></button>
                </div>
                <div>

                </div>
            </div> 
        </div>
    );
};

export default NavigationBar;