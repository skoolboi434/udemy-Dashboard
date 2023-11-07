import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import SearchBar from '../components/SearchBar';
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useUpdateArticleMutation, useGetArticleDetailsQuery, useUploadArticleImageMutation } from '../slices/articlesApiSlice';

const EditArticleScreen = () => {
  const { id: articleId } = useParams();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [publication, setPublication] = useState('');
  const [status, setStatus] = useState('');

  const { data: article, isLoading, refetch, error } = useGetArticleDetailsQuery(articleId);

  const [updateArticle, { isLoading: loadingUpdate }] = useUpdateArticleMutation();

  const [uploadArticleImage, { isLoading: LoadingUpload }] = useUploadArticleImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setBody(article.body);
      setImage(article.image);
      setCategory(article.category);
      setPublication(article.publication);
      setStatus(article.status);
    }
  }, [article]);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      await updateArticle({
        articleId,
        title,
        body,
        image,
        category,
        publication,
        status
      }).unwrap();
      toast('Article updated');
      refetch();
      navigate('/articles');
    } catch (err) {
      toast(err?.data?.message || err.error);
    }
  };

  const uploadFileHandler = async e => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadArticleImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <>
      <PageWrap title='React Dashboard || Edit Article'>
        <SidebarMenu />
        <div className='content-container'>
          <SearchBar />
          <div className='content-edit-container'>
            <Link to='/articles' className='btn btn-primary my-3'>
              Go Back
            </Link>
            {isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <h3>Editing: {article.title}</h3>}

            {loadingUpdate && <Loader />}
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Row>
                  <Col md={4}>
                    <Form.Group controlId='image'>
                      <Form.Label>Image</Form.Label>
                      <Image src={image} fluid />
                      <Form.Control className='mt-3' type='text' placeholder='Add Image URL' value={image} onChange={e => setImage}></Form.Control>
                      <Form.Control type='file' label='Choose File' onChange={uploadFileHandler}></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={8}>
                    <Form.Group controlId='title' className='mb-3'>
                      <Form.Label>Title</Form.Label>
                      <Form.Control type='title' placeholder='Enter Title' value={title} onChange={e => setTitle(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Row className='mb-3'>
                      <Col>
                        <Form.Group controlId='publication'>
                          <Form.Label>Publication</Form.Label>
                          <Form.Control type='publication' placeholder='Enter Publication' value={publication} onChange={e => setPublication(e.target.value)}></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId='category'>
                          <Form.Label>Category</Form.Label>
                          <Form.Control type='category' placeholder='Enter Category' value={category} onChange={e => setCategory(e.target.value)}></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId='status'>
                          <Form.Label>Status</Form.Label>
                          <Form.Control type='status' placeholder='Enter Status' value={status} onChange={e => setStatus(e.target.value)}></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group controlId='body'>
                      <Form.Label>Body</Form.Label>
                      <Form.Control as='textarea' row={6} placeholder='Enter Body' value={body} onChange={e => setBody(e.target.value)}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant='primary' className='my-2' type='submit'>
                  Update Article
                </Button>
              </Form>
            )}
          </div>
        </div>
      </PageWrap>
    </>
  );
};

export default EditArticleScreen;
