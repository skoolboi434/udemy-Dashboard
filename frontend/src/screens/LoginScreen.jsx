import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <div className='center'>
      <h1>Login</h1>
      <Form className='login-form' onSubmit={submitHandler}>
        <Form.Group className='mb-3 input-field' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3 input-field' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button type='submit' className='mt-2' disabled={isLoading}>
          Login
        </Button>
        {isLoading && <Loader />}
        <div className='signup-link mt-3'>
          Not a member? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginScreen;
