import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function LandingNavbar (){
    const [isFixed, setIsFixed] = useState(false);
    const [open, setOpen] = useState(false);
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.pageYOffset > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, [])
    
    return(
        // Navbar Start
        <header 
            className={`bg-white top-0 left-0 w-full flex items-center z-10 
                ${isFixed ? "fixed z-9999 bg-white/70 shadow-md backdrop-blur-[5px] " : "absolute"}
            `}
        >
            <div className='container'>
                <div className='flex items-center justify-between relative'>
                    <div className='px-15'>
                        <a className='font-bold  lg:text-3xl text-xl text-sky-800 block py-4' >LabCode</a>
                    </div>
                    <div className='flex items-center  px-4'>
                        <button 
                        id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden" title="Menu" onClick={() => setOpen(!open)}>
                            <span className={`w-7.5 h-0.5 my-2 block bg-black transition duration-300 ease-in-out origin-top-left
                                ${open ? "rotate-45" : ""}
                                `}></span>
                            <span className={`w-7.5 h-0.5 my-2 block bg-black transition duration-300 ease-in-out 
                                ${open ? "scale-0" : ""}
                                `}></span>
                            <span className={`w-7.5 h-0.5 my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left
                                ${open ? "-rotate-45" : ""}
                                `}></span>
                        </button>
                        <nav  id="nav-menu" className ={`
                            absolute py-5 bg-white shadow-lg rounded-lg max-w-62.5 w-full right-4 top-full lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none
                            ${open ? "block": "hidden"}
                            lg:block
                            `}>
                            <ul className="block lg:flex ">
                                <li className="group">
                                    <Link to="/login" className="text-xl font-semibold text-dark py-2 mx-10 flex group-hover:text-sky-900">Login</Link>
                                </li>
                                <li className="group">
                                    <Link to="/register" className="text-xl font-semibold text-dark py-2 mx-10 flex group-hover:text-sky-900">Register</Link>
                                </li>
                                
                                
                                
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        // Navbar End
    )
}
export default LandingNavbar