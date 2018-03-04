import React from 'react';
import PropTypes from 'prop-types';

const style = {
  imageWrapper: {
    height: 200,
  },
  enlargeImage: {
    width: '30%',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  imgEnlarge: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px 0 0 5px',
  },
};

const AvatarImage = props => {
  return (
    <div style={props.enlargeImage ? style.enlargeImage : style.imageWrapper}>
      <img
        src={props.imageUrl}
        alt="Food"
        style={props.enlargeImage ? style.imgEnlarge : style.img}
      />
    </div>
  );
};

AvatarImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  enlargeImage: PropTypes.bool.isRequired,
};

export default AvatarImage;
