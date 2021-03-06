import React from 'react';
import PropTypes from 'prop-types';
import MoreInformationDescription from './MoreInformationDescription';
import SubItems from './SubItems';
import isEmpty from 'lodash/isEmpty';
import { itemShape } from '../dataShapes';

const style = {
  wrapper: {
    backgroundColor: '#F9F9F9',
    padding: 12,
    color: '#5a5c51',
    flex: '1 1 auto',
    fontWeight: 300,
  },
};
const MoreInformationBlock = props => {
  return (
    <div style={style.wrapper}>
      {props.moreInformation.description && (
        <MoreInformationDescription
          description={props.moreInformation.description}
        />
      )}
      {props.moreInformation.subItems &&
        props.moreInformation.subItems.map((object, index) => {
          return (
            <SubItems
              key={index}
              description={object.description}
              price={object.price}
            />
          );
        })}
      {!isEmpty(props.moreInformation.upgrades) && (
          <SubItems
            description={props.moreInformation.upgrades.description}
            price={props.moreInformation.upgrades.price}
            isUpgrade
          />
        )}
    </div>
  );
};

MoreInformationBlock.propTypes = {
  moreInformation: PropTypes.shape(itemShape),
};

export default MoreInformationBlock;
