import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'

const Pagination = ({handlePageClick, pageCount}) => {
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        breakClassName='break-class'
        nextLabel="Next"
        pageClassName='pagination-design'
        onPageChange={handlePageClick}
        containerClassName="pagination"
        previousLinkClassName='pagination__link'
        nextLinkClassName='pagination__link'
        activeClassName='pagination__link--active'
        activeLinkClassName='active-link-text'
        disabledClassName='pagination__link--disable'
        previousClassName='previous-button'
        nextClassName='next-button'
        pageLinkClassName='selected-page'
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Previous"
        
      />
    </div>
  )
}

export default Pagination