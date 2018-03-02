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
import RenderCards from './RenderCards/RenderCards';

const categoryShape = {
  categoryId: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
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
    listData: PropTypes.arrayOf(PropTypes.shape(listShape)),
    categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)),
    getListOfCategories: PropTypes.func.isRequired,
    selectCategory: PropTypes.func.isRequired,
    getListOfItems: PropTypes.func.isRequired,
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
            />
          ) : (
            <RenderCards
              dataToRender={this.props.listData}
              clickCard={this.props.selectCategory}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { category, list } = state;
  const { selectedCategory, categories } = category;
  const { listData } = list;
  return { selectedCategory, categories, listData };
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
