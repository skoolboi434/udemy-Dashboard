import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

const PostsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await axios.get('/api/articles');
      setArticles(data);
    };

    fetchArticles();
  }, []);
  return (
    <div className='content-list-container'>
      <div className='table-wrapper'>
        <h3 className='heading'>Content Data</h3>
        <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Publisher</th>
                <th>Status</th>
                <th>Date Added</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(article => (
                <tr key={article._id}>
                  <td>{article._id}</td>
                  <td>
                    <Image src={article.image} fluid />
                  </td>
                  <td>
                    <Link to={`/articles/${article._id}`}>{article.title}</Link>
                  </td>
                  <td>{article.publication}</td>
                  <td>{article.status}</td>
                  <td>{new Date().toLocaleString()}</td>
                  <td>
                    <Button variant='primary'>Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
