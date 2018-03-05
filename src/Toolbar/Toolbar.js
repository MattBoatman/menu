import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearList } from '../ListRedux/ListActions';
import { clearSelectedItem } from '../ItemRedux/ItemActions';
import ToolbarButton from './ToolbarButton';

const styles = {
  carat: {
    fontWeight: 700,
    color: '#ffffff',
    paddingTop: 3,
  },

  toolbarWrapper: {
    borderBottom: '1px solid #ffffff',
    display: 'flex',
    padding: 12,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
};

const Toolbar = props => {
  const clearData = () => {
    props.clearList();
    props.clearSelectedItem();
  };
  return (
    <div style={styles.toolbarWrapper}>
      <ToolbarButton text="Menu" onClick={clearData} />
      <span style={styles.carat}>></span>
      {props.name && (
        <ToolbarButton text={props.name} onClick={props.clearSelectedItem} />
      )}
    </div>
  );
};

Toolbar.propTypes = {
  name: PropTypes.string,
  clearList: PropTypes.func.isRequired,
  clearSelectedItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { list } = state;
  const { name } = list;
  return { name };
};

const mapDispatchToProps = dispatch => {
  return {
    clearList: () => {
      dispatch(clearList());
    },
    clearSelectedItem: () => {
      dispatch(clearSelectedItem());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
