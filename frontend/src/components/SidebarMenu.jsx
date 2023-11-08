import React from 'react';
import { Link } from 'react-router-dom';
import { FaCreativeCommonsRemix, FaUser, FaPaperPlane, FaNewspaper, FaSlidersH, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const SidebarMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
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
          <Link to='/users'>
            <FaUsers />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <FaSlidersH />
            <span>Settings</span>
          </Link>
        </li>
        <li className='logout'>
          <Link to='/' onClick={logoutHandler}>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
