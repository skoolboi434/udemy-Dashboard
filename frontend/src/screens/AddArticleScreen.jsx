import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import SearchBar from '../components/SearchBar';

const AddArticleScreen = () => {
  return (
    <>
      <PageWrap title='React Dashboard || Dashboard'>
        <SidebarMenu />
        <div className='content-container'>
          <SearchBar />
        </div>
      </PageWrap>
    </>
  );
};

export default AddArticleScreen;
