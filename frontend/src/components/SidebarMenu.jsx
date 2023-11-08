import React from 'react';
import { Link } from 'react-router-dom';
import { FaCreativeCommonsRemix, FaUser, FaPaperPlane, FaNewspaper, FaSlidersH, FaUsers } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useState, useEffect } from 'react';

const SidebarMenu = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <FaCreativeCommonsRemix />, text: 'Dashboard', link: '/' },
    { icon: <FaPaperPlane />, text: 'Articles', link: '/articles' },
    { icon: <FaNewspaper />, text: 'Pages', link: '/pages' },
    { icon: <FaUser />, text: 'Profile', link: '/' },
    { icon: <FaUsers />, text: 'Users', link: '/users' },
    { icon: <FaSlidersH />, text: 'Settings', link: '/' }
  ];

  const initialActiveIndex = menuItems.findIndex(item => item.link === location.pathname);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  useEffect(() => {
    // Update the active index when the route changes
    const newActiveIndex = menuItems.findIndex(item => item.link === location.pathname);
    setActiveIndex(newActiveIndex);
  }, [location.pathname, menuItems]);

  const handleItemClick = index => {
    setActiveIndex(index); // Set the active index when an item is clicked
  };

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
        {menuItems.map((item, index) => (
          <li key={index} className={index === activeIndex ? 'active' : ''}>
            <Link to={item.link} onClick={() => setActiveIndex(index)}>
              {item.icon}
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
