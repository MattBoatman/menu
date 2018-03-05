import PropTypes from 'prop-types';

export const categoryShape = {
  categoryId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
};

const subItemsShape = {
  description: PropTypes.string,
  price: PropTypes.string,
};

export const itemShape = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  subItems: PropTypes.arrayOf(PropTypes.shape(subItemsShape)),
  upgrades: PropTypes.shape(subItemsShape),
};

export const listShape = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
};
