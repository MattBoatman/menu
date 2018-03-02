import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/Card';
import './RenderCards.css';

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
          />
        );
      })}
    </div>
  );
};

RenderCards.propTypes = {
  dataToRender: PropTypes.array.isRequired,
  clickCard: PropTypes.func.isRequired,
};

export default RenderCards;
