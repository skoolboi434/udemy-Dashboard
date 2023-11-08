import React from 'react';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import PostsList from '../components/content/PostsList';
import SearchBar from '../components/SearchBar';
import ContentContainer from '../components/ContentContainer';
import Meta from '../components/Meta';

const ArticlesScreen = () => {
  return (
    <>
      <PageWrap>
        <Meta title='React Dashboard - Articles' />
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
