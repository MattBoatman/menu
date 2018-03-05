import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';
import './RenderCards.css';
import { itemShape } from '../../dataShapes';

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
            moreInformation={
              props.selectedItem && object.itemId === props.selectedItem.itemId
                ? props.selectedItem
                : null
            }
          />
        );
      })}
    </div>
  );
};

RenderCards.propTypes = {
  dataToRender: PropTypes.array.isRequired,
  clickCard: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape(itemShape),
};

export default RenderCards;
