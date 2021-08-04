import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ListDisplay = props => {
  return <ul className="ListDisplay">
    {props.characters.map(
      char => <ListItem character={char} key={char._id}/>
    )}
  </ul>;
};

ListDisplay.propTypes = {
  characters: PropTypes.array.isRequired
};

export default ListDisplay;
