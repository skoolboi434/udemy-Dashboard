import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import { Image, Container, Row, Col } from 'react-bootstrap';
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
      <PageWrap>
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
                    <h4 className='heading'>Related Articles</h4>
                    <div className='related-post-card mb-2'>
                      <Image src='https://images.unsplash.com/photo-1457269315919-3cfc794943cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=2c42c1cac3092204f4c1afdca4d44e99' fluid />
                      <div className='content-sml'>
                        <p className='title'>The Big subtext</p>
                        <span className='author'>Reeves</span>
                      </div>
                    </div>

                    <div className='related-post-card mb-2'>
                      <Image src='https://images.unsplash.com/photo-1457269315919-3cfc794943cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=2c42c1cac3092204f4c1afdca4d44e99' fluid />
                      <div className='content'>
                        <p className='title'>The Big subtext</p>
                        <span className='author'>Reeves</span>
                      </div>
                    </div>

                    <div className='related-post-card mb-2'>
                      <Image src='https://images.unsplash.com/photo-1457269315919-3cfc794943cd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=2c42c1cac3092204f4c1afdca4d44e99' fluid />
                      <div className='content'>
                        <p className='title'>The Big subtext</p>
                        <span className='author'>Reeves</span>
                      </div>
                    </div>
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
