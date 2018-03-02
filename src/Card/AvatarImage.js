import React from 'react';
import PropTypes from 'prop-types';

const style = {
  imageWrapper: {
    height: 200,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
};

const AvatarImage = props => {
  return (
    <div style={style.imageWrapper}>
      <img src={props.imageUrl} alt="Food" style={style.img} />
    </div>
  );
};

AvatarImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default AvatarImage;
