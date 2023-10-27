import React from 'react';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import PostsList from '../components/content/PostsList';
import SearchBar from '../components/SearchBar';

const ArticlesScreen = () => {
  return (
    <>
      <PageWrap title='React Dashboard || Articles'>
        <SidebarMenu />
        <div className='content-container'>
          <SearchBar title='Articles' />
          <PostsList />
        </div>
      </PageWrap>
    </>
  );
};

export default ArticlesScreen;
