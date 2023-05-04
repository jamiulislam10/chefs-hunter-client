import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../Providers/AuthProviders';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () =>{
     logOut()
     .then()
     .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100 m-auto">
        <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">Chefs Hunters</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

                <li><ActiveLink to='/'>Home</ActiveLink></li>
                <li tabIndex={0}>
                </li>
                <li><ActiveLink to='/blog'>Blog</ActiveLink></li>


            </ul>
        </div>
        <div className="navbar-end m-4">
            {user && <a className="bt"><FaUserCircle style={{ fontSize: '2.5rem' }}></FaUserCircle></a>
            }
            {user ? <button onClick={handleLogOut} className='btn btn-primary'>Logout</button>
            :
            <button className='btn btn-primary'><Link to='/login'>Login</Link></button>
             }

        </div>
        <div>

        </div>
    </div>
    );
};

export default NavigationBar;