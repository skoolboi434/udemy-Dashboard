import React from 'react';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import { Image, Container, Row, Col } from 'react-bootstrap';

const ArticleDetailsScreen = () => {
  return (
    <>
      <PageWrap>
        <SidebarMenu />
        <div className='content-container'>
          <div className='heading-container'>
            <span className='subheading'>Subheading</span>
            <h1 className='heading'>Title</h1>
          </div>
          <Row>
            <Col md={8}>
              <div className='content'>
                <Image src='https://images.unsplash.com/photo-1466436578965-5cba086a1824?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=ac7f8b732c22f512fd982ffddc2078d6' fluid className='feat-img mb-3' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum aperiam ex, recusandae non qui tempore. Quisquam, cupiditate! In suscipit tenetur sit beatae inventore aliquid fugit expedita quis totam. Pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum aperiam ex, recusandae non qui tempore. Quisquam, cupiditate! In suscipit tenetur sit beatae inventore aliquid fugit expedita quis totam. Pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum aperiam ex, recusandae non qui tempore. Quisquam, cupiditate! In suscipit tenetur sit beatae inventore aliquid fugit expedita quis totam. Pariatur?</p>
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
        </div>
      </PageWrap>
    </>
  );
};

export default ArticleDetailsScreen;
