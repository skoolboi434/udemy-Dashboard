import React, { useEffect, useState } from 'react';
import { FaRegNewspaper } from 'react-icons/fa';

const ArticleCard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const res = await fetch('http://localhost:8888/MIDTC-Editorial/wp-json/wp/v2/articles');
      if (!res.ok) {
        alert('There has been an error');
        return;
      }

      const articles = await res.json();
      setArticles(articles);
    }
    loadArticles();
  }, []);
  return (
    <div className='content-card'>
      <div className='content-container'>
        <FaRegNewspaper />
        <div className='content'>
          <span className='count'>{articles.length}</span>
          <h3 className='heading'>Articles</h3>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
