import React, { useState } from 'react';
import '../styles/Top10Websites.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Top10Websites = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page
  const top10Items = [
    'https://via.placeholder.com/300x200.png?text=Websites+1',
    'https://via.placeholder.com/300x200.png?text=Websites+2',
    'https://via.placeholder.com/300x200.png?text=Websites+3',
    'https://via.placeholder.com/300x200.png?text=Websites+4',
    'https://via.placeholder.com/300x200.png?text=Websites+5',
    // Add URLs for other websites
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = top10Items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="top-10-items">
      <h2>Continue Watching</h2> {/* Add the title */}
      <div className="item-list">
        <button
          className={`arrow-button left-arrow ${currentPage === 1 ? 'hidden' : ''}`}
          onClick={() => paginate(currentPage - 1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> {/* Left arrow */}
        </button>
        {currentItems.map((item, index) => (
          <div key={index} className="item-item">
            <img
              src="./favicon.png"
              alt="mariya-logo"
              className="logo"
            /> {/* Logo */}
            <span className="websites-number">{index + 1 + (currentPage - 1) * itemsPerPage}</span>
            <img
              src={item}
              alt={`Websites ${index + 1}`}
              className="websites-poster"
            />
          </div>
        ))}
        <button
          className="arrow-button right-arrow"
          onClick={() => paginate(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faAngleRight} /> {/* Right arrow */}
        </button>
      </div>
      <div className="pagination"></div>
    </div>
  );
};

export default Top10Websites;
