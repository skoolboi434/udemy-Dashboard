import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../slices/usersApiSlice';

import PageWrap from '../components/PageWrap';
import SidebarMenu from '../components/SidebarMenu';
import ContentContainer from '../components/ContentContainer';
import SearchBar from '../components/SearchBar';

const UserEditScreen = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const { data: user, isLoading, error, refetch } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success('User updated successfully');
      refetch();
      navigate('/users');
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <PageWrap>
        <SidebarMenu />
        <ContentContainer>
          <SearchBar />
          <div className='content-edit-container'>
            <Link to='/users' className='btn btn-primary my-3'>
              Go Back
            </Link>
            {loadingUpdate && <Loader />}
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='mb-3'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='name' placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='mb-3'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='isAdmin' className='mb-3'>
                  <Form.Label>isAdmin</Form.Label>
                  <Form.Check type='checkbox' checked={isAdmin} placeholder='Enter Email' value={email} onChange={e => setIsAdmin(e.target.checked)}></Form.Check>
                </Form.Group>
                <Button type='submit' variant='primary' className='my-2'>
                  Update
                </Button>
              </Form>
            )}
          </div>
        </ContentContainer>
      </PageWrap>
    </>
  );
};

export default UserEditScreen;
