import React from 'react'
import { Link } from 'react-router-dom';
// ...existing code...

const Navbar = () => {
  return (
       <header className="flex items-center justify-between py-4 border-b">
      <Link to="/" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
       COPILOT 24
      </Link>
      <ul className="inline-flex items-center">
        <li className="px-2 md:px-4">
          <Link to="/" className="text-purple-600 font-semibold hover:text-purple-500"> Home </Link>
        </li>
        <li className="px-2 md:px-4">
          <a href="#" className="text-gray-500 font-semibold hover:text-purple-500"> About </a>
        </li>
        <li className="px-2 md:px-4">
          <a href="#" className="text-gray-500 font-semibold hover:text-purple-500"> Press </a>
        </li>
        <li className="px-2 md:px-4">
          <Link to="/Contact" className="text-gray-500 font-semibold hover:text-purple-500"> Contact </Link>
        </li>
        <li className="px-2 md:px-4 hidden md:block">
          <Link to="/Login" className="text-gray-500 font-semibold hover:text-purple-500"> Login </Link>
        </li>
        <li className="px-2 md:px-4 hidden md:block">
          <Link to="/Register" className="text-gray-500 font-semibold hover:text-purple-500"> Register </Link>
        </li>
      </ul>

    </header>
  )
}

export default Navbar