import React from 'react';
import PropTypes from 'prop-types';

const style = {
  cardTitle: {
    fontWeight: 800,
    fontSize: '1.1em',
  },
  enlargeTitle: {
    fontWeight: 800,
    fontSize: '1.3em',
  },
};
const CardTitle = props => {
  return (
    <span style={props.enlargeTitle ? style.enlargeTitle : style.cardTitle}>
      {props.title}
    </span>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  enlargeTitle: PropTypes.bool.isRequired,
};

export default CardTitle;
