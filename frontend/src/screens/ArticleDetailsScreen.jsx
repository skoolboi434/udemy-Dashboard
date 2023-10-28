import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import { Image, Row, Col } from 'react-bootstrap';
import RelatedPostsList from '../components/content/RelatedPostsList';
import axios from 'axios';

const ArticleDetailsScreen = () => {
  const [article, setArticle] = useState();

  const { id: articleId } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data } = await axios.get(`/api/articles/${articleId}`);
        setArticle(data);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticle();
  }, [articleId]);
  return (
    <>
      <PageWrap title='React Dashboard'>
        <SidebarMenu />
        <div className='content-container'>
          {article && (
            <>
              <div className='heading-container'>
                <h1 className='heading'>{article.name}</h1>
              </div>

              <Row>
                <Col md={8}>
                  <div className='content'>
                    <Image src={article.image} fluid className='feat-img mb-3' />
                    <p className='subheading'>Category: {article.category}</p>
                    <p className='publication'>Publication: {article.publication}</p>
                    <p>{article.description}</p>
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
      </PageWrap>
    </>
  );
};

export default ArticleDetailsScreen;
