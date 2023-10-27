import React, { useEffect } from 'react';

const PageWrap = props => {
  useEffect(() => {
    document.title = `${props.title}`;
    window.scrollTo(0, 0);
  }, []);
  return <div className='dashboard-container'>{props.children}</div>;
};

export default PageWrap;
