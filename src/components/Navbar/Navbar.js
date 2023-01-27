import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
    return (
        <nav className="navbar flex justify-between bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>My Skills</Link></li>
            <li><Link to='/'>Work</Link></li>
            <li><Link to='/'>Contact</Link></li>
            <li><Link to='/'>Blog</Link></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
          <div className="w-1/4 rounded-full ring ring-offset-base-100 ring-offset-2">
    <img src={logo} alt='husain ahmed' className='rounded' />
  </div>
        </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">About</Link></li>
            <li><Link to="/">My Skills</Link></li>
            <li><Link to="/">Work</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">Blog</Link></li>
            {/* <li><a>Blog</a></li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/' className="btn">Resume</Link>
        </div>
      </nav>
    );
};

export default Navbar;