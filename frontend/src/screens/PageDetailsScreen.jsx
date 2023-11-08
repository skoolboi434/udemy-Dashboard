import PageWrap from '../components/PageWrap';
import { useParams } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu';
import ContentContainer from '../components/ContentContainer';
import Loader from '../components/Loader';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useGetPageDetailsQuery } from '../slices/pagesApiSlice';
import { useState } from 'react';
import PostsList from '../components/content/PostsList';

const PageDetailsScreen = () => {
  const { id: pageId } = useParams();

  const { data: page, isLoading, error } = useGetPageDetailsQuery(pageId);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <PageWrap>
        <SidebarMenu />
        <ContentContainer>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <div>{error?.data?.message || error.error}</div>
          ) : (
            <div className='content-container'>
              {page && (
                <>
                  <div className='heading-container mt-3'>
                    <h1 className='heading'>{page.title}</h1>
                  </div>

                  <Row>
                    <Col md={8}>
                      <div className='content'>
                        <p className='subheading'>Category: {page.category}</p>
                        <p className='publication'>Publication: {page.publication}</p>
                        <p>{page.body}</p>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </div>
          )}
        </ContentContainer>
      </PageWrap>
    </>
  );
};

export default PageDetailsScreen;
