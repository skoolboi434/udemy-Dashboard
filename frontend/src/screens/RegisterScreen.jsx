import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import Loader from '../components/Loader';

const RegisterScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector(state => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  return (
    <div className='center'>
      <h1>Register</h1>
      <Form className='register-form' onSubmit={handleSubmit}>
        <Form.Group className='input-field' controlId='Name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className='input-field' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className='input-field' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Create Password' value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className='input-field' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </Form.Group>
        <Button type='submit' disabled={isLoading}>
          Register
        </Button>
        {isLoading && <Loader />}
        <div className='signup-link mt-3'>
          Already a member? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterScreen;
