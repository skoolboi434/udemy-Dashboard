import React from 'react';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import PostsList from '../components/content/PostsList';
import SearchBar from '../components/SearchBar';
import ContentContainer from '../components/ContentContainer';

const ArticlesScreen = () => {
  return (
    <>
      <PageWrap title='React Dashboard || Articles'>
        <SidebarMenu />
        <ContentContainer>
          <SearchBar title='Articles' />

          <PostsList />
        </ContentContainer>
      </PageWrap>
    </>
  );
};

export default ArticlesScreen;
