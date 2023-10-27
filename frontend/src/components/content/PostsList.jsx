import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PostsList = () => {
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
              <tr>
                <td>123</td>
                <td></td>
                <td>Bills Hamlin will put the millions raised into his charity</td>
                <td>Times Leader</td>
                <td>Draft</td>
                <td>{new Date().toLocaleString()}</td>
                <td>
                  <Button variant='primary'>Edit</Button>
                </td>
              </tr>
              <tr>
                <td>231</td>
                <td></td>
                <td>Bills Hamlin will put the millions raised into his charity</td>
                <td>Times Leader</td>
                <td>Draft</td>
                <td>{new Date().toLocaleString()}</td>
                <td>
                  <Button variant='primary'>Edit</Button>
                </td>
              </tr>
              <tr>
                <td>123</td>
                <td></td>
                <td>Bills Hamlin will put the millions raised into his charity</td>
                <td>Times Leader</td>
                <td>Draft</td>
                <td>{new Date().toLocaleString()}</td>
                <td>
                  <Button variant='primary'>Edit</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
