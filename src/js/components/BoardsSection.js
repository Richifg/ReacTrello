import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoardsSection = ({ children, title, icon }) => {
  if (children.length) {
    return (
      <div className="d-flex flex-column mx-lg-auto mx-0 mb-5 board-display-container">
        <div className="row mx-4 mb-2">
          <div className="col-auto px-0">
            <FontAwesomeIcon icon={icon} className="mr-2 vertical-align-center board-section-title" />
          </div>
          <div className="col-auto px-0">
            <h2 className="board-section-title">{title}</h2>
          </div>
        </div>
        <div className="row mx-0">
          {children}
        </div>
      </div>
    );
  }
  return null;
};

BoardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BoardsSection;
