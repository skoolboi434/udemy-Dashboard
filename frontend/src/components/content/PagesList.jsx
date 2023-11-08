import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Loader from '../Loader';
import Message from '../Message';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useGetPagesQuery } from '../../slices/pagesApiSlice';

const PagesList = () => {
  const { data: pages, isLoading, error, refetch } = useGetPagesQuery();

  const deleteHandler = async id => {
    console.log('deleteHandler');
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
              <Button variant='primary'>Add Page</Button>
              <div className='table-container mt-3'>
                <table>
                  <thead>
                    <tr>
                      <th>#ID</th>
                      <th>Title</th>
                      <th>Publisher</th>
                      <th>Date Added</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map(page => (
                      <tr key={page._id}>
                        <td>{page._id}</td>
                        <td>
                          <Link to={`/pages/${page._id}`}>{page.title}</Link>
                        </td>
                        <td>{page.publication}</td>
                        <td>{new Date().toLocaleString()}</td>
                        <td>
                          <Link className='btn btn-warning mb-2' variant='primary' to={`/pages/${page._id}/edit`}>
                            <FaEdit />
                          </Link>
                          <Button variant='danger' className='btn-sm d-block' onClick={() => deleteHandler(page._id)} style={{ color: 'white', width: '42px' }}>
                            <FaTrash style={{ color: 'white' }} />
                          </Button>
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

export default PagesList;
