import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import CardTitle from './CardTitle';
import MoreInformationBlock from './MoreInformationBlock';

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

const style = {
  container: {
    padding: 16,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  enlargeContainer: {
    width: '70%',
    display: 'flex',
    flexFlow: 'column',
  },
};

const CardBottom = props => {
  return (
    <div
      style={
        props.moreInformation
          ? {
              ...style.enlargeContainer,
              borderRight: `7px solid ${props.color}`,
              borderRadius: 5,
            }
          : { borderBottom: `7px solid ${props.color}`, borderRadius: 5 }
      }
    >
      <div style={style.container}>
        {props.title && (
          <CardTitle
            enlargeTitle={props.moreInformation !== null}
            title={props.title}
          />
        )}
        {props.price && (
          <Price
            enlargePrice={props.moreInformation !== null}
            price={props.price}
          />
        )}
      </div>
      {props.moreInformation && (
        <MoreInformationBlock moreInformation={props.moreInformation} />
      )}
    </div>
  );
};

CardBottom.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  moreInformation: PropTypes.shape(itemShape),
};

export default CardBottom;
