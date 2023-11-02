import { useGetArticleDetailsQuery } from '../slices/articlesApiSlice';
import { useParams } from 'react-router-dom';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import { Image, Row, Col } from 'react-bootstrap';
import RelatedPostsList from '../components/content/RelatedPostsList';
import Loader from '../components/Loader';

const ArticleDetailsScreen = () => {
  const { id: articleId } = useParams();

  const { data: article, isLoading, error } = useGetArticleDetailsQuery(articleId);

  return (
    <>
      <PageWrap title='React Dashboard'>
        <SidebarMenu />
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>{error?.data?.message || error.error}</div>
        ) : (
          <div className='content-container'>
            {article && (
              <>
                <div className='heading-container'>
                  <h1 className='heading'>{article.title}</h1>
                </div>

                <Row>
                  <Col md={8}>
                    <div className='content'>
                      <Image src={article.image} fluid className='feat-img mb-3' />
                      <p className='subheading'>Category: {article.category}</p>
                      <p className='publication'>Publication: {article.publication}</p>
                      <p>{article.body}</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='side-list-container'>
                      <h4 className='heading'>Related {article.category} Articles</h4>
                      <RelatedPostsList category={article.category} />
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </div>
        )}
      </PageWrap>
    </>
  );
};

export default ArticleDetailsScreen;
