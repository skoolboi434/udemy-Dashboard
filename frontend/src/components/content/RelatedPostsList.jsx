import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import axios from 'axios';

const RelatedPostsList = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get('/api/articles');
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  console.log('Category:', category);
  //console.log('All Articles:', articles);

  return (
    <div>
      {/* {articles
        .filter(article => article.category === category)
        .map(article => (
          <div key={article._id} className='related-post-card mb-2'>
            <Image src={article.image} fluid />
            <div className='content-sml'>
              <p className='title'>{article.title}</p>
              <span className='author'>{article.user.name}</span>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default RelatedPostsList;
