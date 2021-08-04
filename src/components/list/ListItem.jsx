import React from 'react';
import PropTypes from 'prop-types';

const ListItem = props => {
  return <li className="ListItem">
    <img src={props.character.photoUrl} alt={props.character.name}/>
    {props.character.name}
  </li>;
};

ListItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default ListItem;
