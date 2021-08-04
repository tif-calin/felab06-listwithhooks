import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  return <li className="ListItem">
    {props.character}
  </li>;
};

ListItem.propTypes = {
  character: PropTypes.array.isRequired
};

export default ListItem;
