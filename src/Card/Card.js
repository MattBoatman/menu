import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardBottom from './CardBottom';
import AvatarImage from './AvatarImage';

const subItemsShape = {
  description: PropTypes.string,
  price: PropTypes.string,
};

const itemShape = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  subItems: PropTypes.arrayOf(PropTypes.shape(subItemsShape)),
  upgrades: PropTypes.shape(subItemsShape),
};

const Card = props => {
  return (
    <div
      className={props.moreInformation ? 'selectedCard' : 'card'}
      onClick={props.clickCard}
    >
      <AvatarImage
        imageUrl={props.imageUrl}
        enlargeImage={props.moreInformation !== null}
      />
      <CardBottom
        moreInformation={props.moreInformation}
        color={props.color}
        title={props.title}
        price={props.price}
      />
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  clickCard: PropTypes.func.isRequired,
  price: PropTypes.string,
  moreInformation: PropTypes.shape(itemShape),
};

export default Card;
