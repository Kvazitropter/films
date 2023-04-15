import React from 'react';
import propTypes from 'prop-types';
import Star from './Star';

const Stars = (props) => {
  const { count } = props;
  const isValidCount = count >= 1 && count <= 5;

  return isValidCount && (
    <ul class="card-body-stars u-clearfix">
      {Array(count).fill(<Star />)}
    </ul>
  );
};

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: propTypes.number,
};

export default Stars;
