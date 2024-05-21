// import React from "react";
 //import {Navbar} from "../Navbar/Navbar.css";
// import 'tailwindcss/tailwind.css';
// export const Header = () => {
//    return (
//     <div className='container mx-auto'>
//       <header className='header bg-gray-800 text-white'>
//        <Navbar/>
//       </header>
//     </div>
//   );
// };

import React from 'react';
import { NavLink } from 'react-router-dom';
import viteLogo from '/vite.svg';



export const Header = () => { 
    return (
       
            <header  className='bg-purple-600 text-white flex items-center font-helvetica font-light justify-between p-4'>
                <div className='text-xl'>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo h-6" alt="Vite logo" />
                    </a>
                </div>
                <NavLink className='text-xl font-semibold leading-6 text-white py-2 cursor-pointer' to="/">Home</NavLink>
                <NavLink className='text-xl font-semibold leading-6 text-white py-2 cursor-pointer' to="/about">About</NavLink>
                <NavLink className='text-xl font-semibold leading-6 text-white py-2 cursor-pointer' to="/galleries">Gallery</NavLink>
                <NavLink className='text-xl font-semibold leading-6 text-white py-2 cursor-pointer' to="/blogs">BlogInfo</NavLink> 
                <NavLink className='text-xl font-semibold leading-6 text-white py-2 cursor-pointer' to="/contact">Contact</NavLink> 
            </header>
       
    )
};