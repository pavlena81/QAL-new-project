import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
   return (
    <div className='container'>
      <header className='header'>
        <Navbar />        
      </header>
    </div>
  );
};