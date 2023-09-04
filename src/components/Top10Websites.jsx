import React, { useState } from 'react';
import '../styles/Top10Websites.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Top10Websites = ({ handleWebsiteChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const top10Items = [
    '/mariyaposter.png',
    '/nexus.png',
    '/techblazers.png',
    '/exploredia.png',
    '/cuisina.png',
    // Add URLs for other websites
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = top10Items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="top-10-items">
      <h2>Continue Watching</h2>
      <div className="item-list">
        {currentItems.map((item, index) => (
          <div key={index} className="item-item" onClick={() => handleWebsiteChange(indexOfFirstItem + index)}>
            <img
              src="./favicon.png"
              alt="mariya-logo"
              className="logo"
            />
            <span className="websites-number">{index + 1 + (currentPage - 1) * itemsPerPage}</span>
            <img
              src={item}
              alt={`Websites ${index + 1}`}
              className="websites-poster"
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className={`arrow-button left-arrow ${currentPage === 1 ? 'hidden' : ''}`}
          onClick={() => paginate(currentPage - 1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          className="arrow-button right-arrow"
          onClick={() => paginate(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Top10Websites;
