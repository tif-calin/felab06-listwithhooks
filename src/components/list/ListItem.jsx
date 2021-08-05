import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = props => {
  return <li className="ListItem">
    <Link to={`/${props.character._id}`}>
      <img src={props.character.photoUrl} alt={props.character.name}/>
      {props.character.name}
    </Link>
  </li>;
};

ListItem.propTypes = {
  character: PropTypes.object.isRequired
};

export default ListItem;
