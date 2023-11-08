import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import ContentContainer from '../components/ContentContainer';
import UsersList from '../components/content/UsersList';
import SearchBar from '../components/SearchBar';

const UsersScreen = () => {
  return (
    <>
      <PageWrap>
        <SidebarMenu />
        <ContentContainer>
          <SearchBar title='Users' />
          <UsersList />
        </ContentContainer>
      </PageWrap>
    </>
  );
};

export default UsersScreen;
