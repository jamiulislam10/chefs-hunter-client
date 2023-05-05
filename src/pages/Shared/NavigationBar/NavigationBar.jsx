import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../Providers/AuthProviders';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        


<div>
            <nav className="navbar bg-cyan-50 pr-20 pl-20">
                <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Chefs Hunter</a>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to="/">Home</ActiveLink></li>
                            <li><ActiveLink to="/blog">Blog</ActiveLink></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><ActiveLink to="/">Home</ActiveLink></li>
                        <li><ActiveLink to="/blog">Blog</ActiveLink></li>
                    </ul>
                </div>

                {user ?
                    <div className=" ml-96">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full" title={user?.displayName}>
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul>   <li onClick={handleLogOut}> <Link className='btn btn-primary'>Logout</Link> </li></ul>

                    </div>
                    :
                    <li><ActiveLink  to="/login">Login</ActiveLink></li>

                }
            </nav>
        </div>
    );
};

export default NavigationBar;