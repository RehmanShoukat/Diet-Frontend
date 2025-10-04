import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isAuth, isSuperAdmin, handleLogout } = useAuthContext()

  return (
    <nav className="bg-white shadow ">
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24  py-2 flex justify-between items-center">

        <div className="flex items-center  ">
          <img src={Logo} alt="logo" className="h-15 w-auto text-xl md:!text-2xl lg:!text-5xl" />
          <span className=" md:!text-2xl lg:!text-3xl font-semibold text-gray-800">Dietetics Refill</span>
        </div>

        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        <ul className="hidden md:flex space-x-4 text-xs sm:text-sm md:text-base lg:text-xl font-bold text-gray-700 p-4">
          <li className="relative group hover:text-yellow-600 cursor-pointer">
            <Link to= "/">Home</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
          <li className="relative group hover:text-yellow-600 cursor-pointer">
            <Link to="/about">About</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
          <li className="relative group hover:text-yellow-600 cursor-pointer">
            <Link to= '/contact'>Contact</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
          <li className="relative group hover:text-yellow-600 cursor-pointer">
            <Link to= '/services'>Our Services</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
          <li className="relative group hover:text-yellow-600 cursor-pointer">
            <Link to= "/appointment">Appointment</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
         
          {!isAuth
          ?<li className="relative group hover:text-yellow-600 cursor-pointer">
            <Link to="/auth/login">Login</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
          :
          <>
          
          <li className="relative group hover:text-yellow-600 cursor-pointer">
            <Link to="/dashboard">Dashboard</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
    
          <li className="relative group hover:text-yellow-600 cursor-pointer">
            <button onClick={handleLogout}>Logout</button>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-600 transition-all duration-300 group-hover:w-[30%]"></span>
          </li>
          </>
          }
          
        </ul>
      </div>

      {menuOpen && (
  <div className="md:hidden bg-amber-50 pb-4 shadow-md w-full">
    <ul className="flex flex-col space-y-3 text-base font-medium text-gray-700">
      <li className="hover:text-green-500 cursor-pointer"><Link to="/">Home</Link></li>
      <li className="hover:text-green-500 cursor-pointer"><Link to="/about">About</Link></li>
      <li className="hover:text-green-500 cursor-pointer"><Link to="/contact">Contact</Link></li>
      <li className="hover:text-green-500 cursor-pointer"><Link to="/services">Our Services</Link></li>
      <li className="hover:text-green-500 cursor-pointer"><Link to="/appointment">Appointment</Link></li>
      <li className="hover:text-green-500 cursor-pointer"><Link to="/blogs">Blog</Link></li>

      {isAuth && isSuperAdmin && (
        <li className="hover:text-green-500 cursor-pointer">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      {isAuth && (
        <li className="hover:text-green-500 cursor-pointer">
          <button onClick={handleLogout}>Logout</button>
        </li>
      )}

      {!isAuth && (
        <li className="hover:text-green-500 cursor-pointer">
          <Link to="/auth/login">Login</Link>
        </li>
      )}
    </ul>
  </div>
)}

    </nav>
  );
}
