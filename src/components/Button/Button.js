
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onLoadMore } = props;
  
  return (
    <div className="LoadMoreWrap">
      <button type="buttton" className="Button" onClick={onLoadMore}>
        Load more
      </button>
    </div>    
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;