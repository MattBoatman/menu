import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import './MainWrapper.css';
import Toolbar from '../Toolbar/Toolbar';
import {
  getListOfCategories,
  selectCategory,
} from '../CategoryRedux/CategoryActions';
import { getListOfItems } from '../ListRedux/ListActions';
import { getItem } from '../ItemRedux/ItemActions';
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

const listShape = {
  itemId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  color: PropTypes.string,
};

class MainWrapper extends Component {
  static propTypes = {
    selectedCategory: PropTypes.shape(categoryShape),
    selectedItem: PropTypes.shape(itemShape),
    listData: PropTypes.arrayOf(PropTypes.shape(listShape)),
    categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)),
    getListOfCategories: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    getListOfItems: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getListOfCategories();
  }
  componentWillReceiveProps(props) {
    if (
      !isEmpty(props.selectedCategory) &&
      !isEqual(props.selectedCategory, this.props.selectedCategory)
    ) {
      this.props.getListOfItems(props.selectedCategory.categoryId);
    }
  }
  render() {
    return (
      <div>
        <Toolbar
          title="Boatman's Menu"
          categoryType={this.props.selectedCategory.name}
        />
        <div className="main-wrapper">
          {isEmpty(this.props.selectedCategory) ? (
            <RenderCards
              dataToRender={this.props.categories}
              clickCard={this.props.selectCategory}
              selectedItem={this.props.selectedItem}
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
  const { selectedCategory, categories } = category;
  const { listData } = list;
  const { selectedItem } = item;
  return { selectedCategory, categories, listData, selectedItem };
};

const mapDispatchToProps = dispatch => {
  return {
    getListOfCategories: () => {
      dispatch(getListOfCategories());
    },
    selectCategory: category => {
      dispatch(selectCategory(category));
    },
    getListOfItems: selectedCategoryId => {
      dispatch(getListOfItems(selectedCategoryId));
    },
    getItem: item => {
      dispatch(getItem(item.itemId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
