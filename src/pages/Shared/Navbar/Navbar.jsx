// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import Cards from '../Cards/Cards';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
   const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
   }
    return (
        <div>
            <div className="navbar bg-base-100 m-auto">
                <div className="navbar-start">
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
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://www.chinadaily.com.cn/china/images/attachement/jpg/site1/20170329/eca86bd9e2f91a455efb0c.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://ohmydish.com/uploads/2022/how-to-become-a-chef-for-a-foreigner-in-europe.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://thumbs.dreamstime.com/b/chef-assistant-chefs-cooking-prepared-buffet-food-thai-foreigner-people-eating-restaurant-night-time-december-139527162.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://en.life-in-germany.de/wp-content/uploads/sites/8/2021/09/chefs-preparing-food-SBI-300847686.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Navbar;