import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-red-700 text-white py-2 px-6 shadow-md ">
      <ul className="flex justify-center space-x-6 text-xl font-medium">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/consultancy"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Consultancy
        </NavLink>
        <NavLink
          to="/horoscope"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Horoscope
        </NavLink>
        <NavLink
          to="/FreeRemedyCalculator"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Free Remedy Calculator
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/membership"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Membership
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? 'text-yellow-200' : 'hover:text-yellow-300'
          }
        >
          Blog
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navbar;