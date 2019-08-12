import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import imgCredits from '../img-credits';

const AppFooter = ({ img, color }) => {
  const credit = imgCredits[img];
  return (
    <footer id="footer" className={`container-fluid bg-${color}`}>
      <div className="row justify-content-end mr-3">
        <h6>
          { credit
            ? (
              <span className="footer">
                {'Photo by '}
                <a
                  className="footer"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={credit.url}
                >
                  {credit.author}
                </a>
              </span>
            )
            : 'Lorem Ipsum'
          }
        </h6>
      </div>
    </footer>
  );
};

AppFooter.propTypes = {
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  color: state.ui.color,
  img: state.ui.img,
});

export default connect(mapStateToProps)(AppFooter);
