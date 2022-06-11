import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const PaginationComponent = ({ page, setPage }) => {
  return (
    <div className='user-detail-wrapper pagination'>
      <div className='pagination-grid'>
        <div
          className='pagination-grid-item'
          onClick={() => setPage((prevPage) => prevPage - 1)}>
          <FontAwesomeIcon icon={faAngleDoubleLeft} color='#0476d0' size='xs' />
        </div>
        <div
          className={page === 1 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(1)}>
          1
        </div>
        <div
          className={page === 2 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(2)}>
          2
        </div>
        <div
          className={page === 3 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(3)}>
          3
        </div>
        <div
          className={page === 4 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(4)}>
          4
        </div>
        <div
          className={page === 5 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(5)}>
          5
        </div>
        <div
          className={page === 6 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(6)}>
          6
        </div>
        <div
          className={page === 7 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(7)}>
          7
        </div>
        <div
          className={page === 8 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(8)}>
          8
        </div>
        <div
          className={page === 9 ? 'active-button' : 'pagination-grid-item'}
          onClick={() => setPage(9)}>
          9
        </div>
        <div
          className={page === 10 ? 'active-button' : 'pagination-grid-item'}
          style={{ border: 'none' }}
          onClick={() => setPage((prevPage) => prevPage + 1)}>
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            color='#0476d0'
            size='xs'
          />
        </div>
      </div>
      <div className='button-wrapper'>
        <button
          className='pagination-button'
          onClick={() => setPage((prevPage) => prevPage - 1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Older
        </button>
        <button
          className='pagination-button'
          onClick={() => setPage((prevPage) => prevPage + 1)}>
          Newer
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
