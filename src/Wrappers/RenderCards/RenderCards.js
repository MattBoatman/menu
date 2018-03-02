import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';
import './RenderCards.css';

const subItemsShape = {
  description: PropTypes.string,
  price: PropTypes.string,
}

const itemShape = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  subItems: PropTypes.arrayOf(PropTypes.shape(subItemsShape)),
  upgrades: PropTypes.shape(subItemsShape),
};

const RenderCards = props => {
  return (
    <div className="renderCardWrapper">
      {props.dataToRender.map(object => {
        return (
          <Card
            key={object.categoryId || object.itemId}
            title={object.name}
            clickCard={() => props.clickCard(object)}
            imageUrl={object.imageUrl}
            color={object.color}
            price={object.price}
            moreInformation={object.itemId === props.selectedItem.itemId ? props.selectedItem : null}
          />
        );
      })}
    </div>
  );
};

RenderCards.propTypes = {
  dataToRender: PropTypes.array.isRequired,
  clickCard: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape(itemShape).isRequired,
};

export default RenderCards;
