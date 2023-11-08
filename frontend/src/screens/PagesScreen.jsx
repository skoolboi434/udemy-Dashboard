import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import SearchBar from '../components/SearchBar';
import ContentContainer from '../components/ContentContainer';
import PagesList from '../components/content/PagesList';

const PagesScreen = () => {
  return (
    <>
      <PageWrap>
        <SidebarMenu />
        <ContentContainer>
          <SearchBar title='Pages' />
          <PagesList />
        </ContentContainer>
      </PageWrap>
    </>
  );
};

export default PagesScreen;
