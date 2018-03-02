import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MainWrapper.css';
import Toolbar from '../Toolbar/Toolbar';
import { getListOfCategories } from '../CategoryRedux/CategoryActions';
import { getListOfItems, clearList } from '../ListRedux/ListActions';
import { getItem, clearSelectedItem } from '../ItemRedux/ItemActions';
import RenderCards from './RenderCards/RenderCards';

const categoryShape = {
  categoryId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
};

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

const listShape = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
};

class MainWrapper extends Component {
  static propTypes = {
    selectedItem: PropTypes.shape(itemShape),
    listData: PropTypes.arrayOf(PropTypes.shape(listShape)),
    categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)),
    getListOfCategories: PropTypes.func.isRequired,
    getListOfItems: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    clearList: PropTypes.func.isRequired,
    clearSelectedItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getListOfCategories();
  }

  render() {
    return (
      <div>
        <Toolbar
          clearList={this.props.clearList}
          clearSelectedItem={this.props.clearSelectedItem}
          hasListData={this.props.listData.length > 0}
          hasCategoryData={this.props.categories.length > 0}
        />
        <div className="main-wrapper">
          {this.props.listData.length === 0 ? (
            <RenderCards
              dataToRender={this.props.categories}
              clickCard={this.props.getListOfItems}
            />
          ) : (
            <RenderCards
              dataToRender={this.props.listData}
              clickCard={this.props.getItem}
              selectedItem={this.props.selectedItem}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { category, list, item } = state;
  const { categories } = category;
  const { listData } = list;
  const { selectedItem } = item;
  return { categories, listData, selectedItem };
};

const mapDispatchToProps = dispatch => {
  return {
    getListOfCategories: () => {
      dispatch(getListOfCategories());
    },
    getListOfItems: selectedCategory => {
      dispatch(getListOfItems(selectedCategory.categoryId));
    },
    getItem: item => {
      dispatch(getItem(item.itemId));
    },
    clearList: () => {
      dispatch(clearList());
    },
    clearSelectedItem: () => {
      dispatch(clearSelectedItem());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
