import { useGetArticlesQuery, useCreateArticleMutation, useDeleteArticleMutation } from '../../slices/articlesApiSlice';
import { Link, useParams } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';
import Loader from '../Loader';
import Message from '../Message';
import { toast } from 'react-toastify';
import { FaTrash, FaEdit } from 'react-icons/fa';
import Paginate from '../Paginate';

const PostsList = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error, refetch } = useGetArticlesQuery({
    pageNumber
  });

  const [createArticle, { isLoading: loadingCreate }] = useCreateArticleMutation();

  const [deleteArticle, { isLoading: loadingDelete }] = useDeleteArticleMutation();

  const deleteHandler = async id => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteArticle(id);
        toast.success('Article Deleted');
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.messsage);
      }
    }
  };

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
      {loadingDelete && <Loader />}
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

              <div className='table-container mt-3'>
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
                    {data.articles.map(article => (
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
                          <Link className='btn btn-warning mb-2' variant='primary' to={`/articles/${article._id}/edit`}>
                            <FaEdit />
                          </Link>
                          <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(article._id)} style={{ color: 'white', width: '42px' }}>
                            <FaTrash style={{ color: 'white' }} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Paginate pages={data.pages} page={data.page} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PostsList;
