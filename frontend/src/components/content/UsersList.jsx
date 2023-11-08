import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import Message from '../Message';
import { useGetUsersQuery, useDeleteUserMutation } from '../../slices/usersApiSlice';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const UsersList = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

  const deleteHandler = async id => {
    if (window.confirm('Are you sure you want to delete this user')) {
      try {
        await deleteUser(id);
        toast.success('User Deleted');
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.message);
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
              <div className='table-container'>
                <table>
                  <thead>
                    <tr>
                      <th>#ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Admin</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.isAdmin ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</td>
                        <td>
                          <Link className='btn btn-warning mb-2' variant='primary' to={`/user/${user._id}/edit`}>
                            <FaEdit />
                          </Link>
                          <Button variant='danger' className='btn-sm d-block' onClick={() => deleteHandler(user._id)} style={{ color: 'white', width: '42px' }}>
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

export default UsersList;
