import React from 'react';
import PropTypes from 'prop-types';
import ToolbarButton from './ToolbarButton';

const styles = {
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#ffffff',
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
      {props.hasCategoryData && (
        <ToolbarButton text="Categories" onClick={clearData} />
      )}
      <span style={styles.title}>></span>
      {props.hasListData && (
        <ToolbarButton text="List" onClick={props.clearSelectedItem} />
      )}
    </div>
  );
};

Toolbar.propTypes = {
  hasListData: PropTypes.bool.isRequired,
  hasCategoryData: PropTypes.bool.isRequired,
  clearList: PropTypes.func.isRequired,
  clearSelectedItem: PropTypes.func.isRequired,
};

export default Toolbar;
