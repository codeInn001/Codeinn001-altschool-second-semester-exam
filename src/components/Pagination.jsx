import React from "react";
import '../assets/styles/pagination.css';




function Pagination({ pageNumbers, currentPage, setCurrentPage }) {
  const numbersOfPages = [...Array(pageNumbers).keys()].slice(1);

  function nextPage() {
    if (currentPage !== numbersOfPages.length)
      setCurrentPage((prev) => prev + 1);
  }

  function prevPage() {
    if (currentPage !== 1) setCurrentPage((prev) => prev - 1);
  }
  return (
    <div className="pagination-container">
      <button className="previous-btn" onClick={prevPage}>
        Previous
      </button>
      {numbersOfPages.map((page) => (
        <button
          className={currentPage === page ? 'active' : ''}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button className="next-btn" onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
