import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css'
import viteLogo from '/vite.svg'


export const Navbar = () => { 

    return (
        <>
            <div className='container'>
            <header className='navbar bg-rebeccapurple text-white flex items-center font-helvetica font-light'>
                
                <div className='navbar__title navbar__item text-xl'>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo h-6" alt="Vite logo" />
                    </a>
                </div>
                <NavLink className='navbar__item py-2 cursor-pointer' to="/">Home</NavLink>
                <NavLink className='navbar__item py-2 cursor-pointer' to="/about">About</NavLink>
                <NavLink className='navbar__item py-2 cursor-pointer' to="/galleries">Gallery</NavLink>
                
                <NavLink className='navbar__item py-2 cursor-pointer' to="/blogs">BlogInfo</NavLink> 
                    
            </header></div>
        </>
    )
    
};

