import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardBottom from './CardBottom';
import AvatarImage from './AvatarImage';
import { itemShape } from '../dataShapes';
import ErrorBoundary from '../Errors/ErrorBoundary';

const Card = props => {
  return (
    <button
      className={props.moreInformation ? 'selectedCard' : 'card'}
      onClick={props.clickCard}
    >
      <ErrorBoundary>
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
      </ErrorBoundary>
    </button>
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
