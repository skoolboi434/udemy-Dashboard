import { useGetArticlesQuery, useCreateArticleMutation } from '../../slices/articlesApiSlice';
import { Link } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Loader from '../Loader';
import Message from '../Message';
import { toast } from 'react-toastify';

const PostsList = () => {
  const { data: articles, isLoading, error, refetch } = useGetArticlesQuery();

  const [createArticle, { isLoading: loadingCreate }] = useCreateArticleMutation();

  const createArticleHandler = async () => {
    if (window.confirm('Are you sure you want to create a new Article')) {
      try {
        await createArticle();
        refetch();
      } catch (err) {
        console.error('Error:', error);
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <div className='content-list-container'>
            <div className='table-wrapper'>
              <Button variant='primary' onClick={createArticleHandler}>
                Add Article
              </Button>
              {loadingCreate && <Loader />}
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
        </>
      )}
    </>
  );
};

export default PostsList;
