import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const SearchBar = ({ title }) => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword('');
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };
  return (
    <div className='header-container'>
      <div className='header-title'>
        <h2>{title}</h2>
      </div>
      <div className='user-info'>
        <Form className='search-box' onSubmit={submitHandler}>
          <FaSearch />
          <Form.Control type='text' name='q' value={keyword} onChange={e => setKeyword(e.target.value)} placeholder='Search...'></Form.Control>
        </Form>
      </div>
    </div>
  );
};

export default SearchBar;
