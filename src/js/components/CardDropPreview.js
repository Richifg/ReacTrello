import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CardDropPreview = ({ description }) => (
  <div
    className="card card-display container mb-2 px-2 py-1 drop-preview"
  >
    <div className="row mx-0">
      <div className="col-11 px-0">
        {description}
      </div>
    </div>
  </div>
);

CardDropPreview.propTypes = {
  description: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  description: state.cards[ownProps.cardId].description,
});

export default connect(mapStateToProps)(CardDropPreview);
