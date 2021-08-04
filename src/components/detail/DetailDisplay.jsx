import React from 'react';
import PropTypes from 'prop-types';

const DetailDisplay = props => {
  return <div className="DetailDisplay">
    <span>{props.character.name}</span>
    <span>|| {props.character.affiliation}</span>
    <img src={props.character.photoUrl} />
    <p>{props.character.allies.join(', ')}</p>
    <p>{props.character.enemies.join(', ')}</p>
  </div>;
};

DetailDisplay.propTypes = {
  character: PropTypes.object.isRequired
};

export default DetailDisplay;
