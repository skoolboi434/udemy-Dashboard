import React from 'react';
import { FaPaperPlane, FaNewspaper } from 'react-icons/fa';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import SearchBar from '../components/SearchBar';
import PostsList from '../components/content/PostsList';

const HomeScreen = () => {
  return (
    <>
      <PageWrap title='React Dashboard || Dashboard'>
        <SidebarMenu />
        <div className='content-container'>
          <SearchBar title='Dashboard' />
          <div className='card-container'>
            <h3 className='main-title'>Today's Data</h3>
            <div className='card-wrapper'>
              <div className='article-card light-red'>
                <div className='card-header'>
                  <div className='total'>
                    <span className='title'>Article Total: </span>
                    <span className='count'>10</span>
                  </div>
                  <div className='icon-container dark-red'>
                    <FaPaperPlane />
                  </div>
                </div>
                <span className='card-details'>Details</span>
              </div>

              <div className='page-card light-purple'>
                <div className='card-header'>
                  <div className='total'>
                    <span className='title'>Print Page Total: </span>
                    <span className='count'>15</span>
                  </div>
                  <div className='icon-container dark-purple'>
                    <FaNewspaper />
                  </div>
                </div>
                <span className='card-details'>Details</span>
              </div>

              <div className='edition-card light-green'>
                <div className='card-header'>
                  <div className='total'>
                    <span className='title'>Editions Total: </span>
                    <span className='count'>7</span>
                  </div>
                  <div className='icon-container dark-green'>
                    <FaNewspaper />
                  </div>
                </div>
                <span className='card-details'>Details</span>
              </div>
            </div>
          </div>{' '}
          {/* End Card Container */}
          <PostsList />
        </div>
      </PageWrap>
    </>
  );
};

export default HomeScreen;
