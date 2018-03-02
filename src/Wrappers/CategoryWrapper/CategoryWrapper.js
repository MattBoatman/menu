import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getListOfCategories, selectCategory } from './CategoryActions';
import './CategoryWrapper.css';
import Card from '../../Card/Card';

const categoryShape = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

class CategoryWrapper extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    getListOfCategories: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape(categoryShape)).isRequired,
  };
  componentDidMount() {
    this.props.getListOfCategories();
  }

  render() {
    return (
      <div className="categoryWrapper">
        {this.props.categories.map(category => {
          return <Card
            key={category.id}
            id={category.id}
            title={category.type}
            clickCard={() => this.props.selectCategory(category)}
            imageUrl={category.imageUrl}
            color={category.color} />
        })}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    ...state.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListOfCategories: () => {
      dispatch(getListOfCategories());
    },
    selectCategory: (category) => {
      dispatch(selectCategory(category));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryWrapper);
