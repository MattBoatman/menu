import React from 'react';
import PropTypes from 'prop-types';

const style = {
    wrapper: {
        fontWeight: 600,
    }
}
const MoreInformationDescription = props => {
  return <div style={style.wrapper}>{props.description}</div>;
};

MoreInformationDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default MoreInformationDescription;
