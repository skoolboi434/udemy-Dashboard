import React from 'react';
import { Link } from 'react-router-dom';
import { FaCreativeCommonsRemix, FaUser, FaPaperPlane, FaNewspaper, FaSlidersH } from 'react-icons/fa';

const SidebarMenu = () => {
  return (
    <div className='sidebar'>
      <div className='logo'></div>
      <ul className='main-nav'>
        <li className='active'>
          <Link to='/'>
            <FaCreativeCommonsRemix />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/articles'>
            <FaPaperPlane />
            <span>Articles</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FaNewspaper />
            <span>Pages</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FaUser />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FaSlidersH />
            <span>Settings</span>
          </Link>
        </li>
        <li className='logout'>
          <Link to='/'>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
