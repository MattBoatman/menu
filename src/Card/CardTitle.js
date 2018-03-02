import React from 'react';
import PropTypes from 'prop-types';

const style = {
    cardTitle: {
        fontWeight: 800,
        fontSize: 16,
    }
}
const CardTitle = props => {
  return <span style={style.cardTitle}>{props.title}</span>;
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardTitle;
