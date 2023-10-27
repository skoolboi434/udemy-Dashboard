import React, { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const PagesCard = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function loadPages() {
      const res = await fetch('http://localhost:8888/MIDTC-Editorial/wp-json/wp/v2/print-pages');
      if (!res.ok) {
        alert('There has been an error');
        return;
      }

      const pages = await res.json();
      setPages(pages);
    }
    loadPages();
  }, []);
  return (
    <div className='content-card'>
      <div className='content-container'>
        <FaCopy />
        <div className='content'>
          <span className='count'>{pages.length}</span>
          <h3 className='heading'>Print Pages</h3>
        </div>
      </div>
    </div>
  );
};

export default PagesCard;
