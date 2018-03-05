import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { categoryShape, itemShape, listShape} from '../dataShapes';
import { getListOfCategories } from '../CategoryRedux/CategoryActions';
import { getListOfItems } from '../ListRedux/ListActions';
import { getItem } from '../ItemRedux/ItemActions';
import RenderCards from './RenderCards/RenderCards';
import Toolbar from '../Toolbar/Toolbar';
import './MainWrapper.css';


class MainWrapper extends Component {
  static propTypes = {
    selectedItem: PropTypes.shape(itemShape),
    listData: PropTypes.arrayOf(PropTypes.shape(listShape)),
    categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)),
    getListOfCategories: PropTypes.func.isRequired,
    getListOfItems: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getListOfCategories();
  }

  render() {
    return (
      <div>
        <Toolbar />
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
      dispatch(getListOfItems(selectedCategory));
    },
    getItem: item => {
      dispatch(getItem(item.itemId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);
