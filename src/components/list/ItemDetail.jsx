import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article.css';

const Article = props => {
  return <div className={styles.Article}>
    <span>{props.character.name}</span>
    <span>|| {props.character.affiliation}</span>
    <img src={props.character.photoUrl} />
    <p>{props.character.allies.join(', ')}</p>
    <p>{props.character.enemies.join(', ')}</p>
  </div>;
};

Article.propTypes = {
  character: PropTypes.object.isRequired
};

export default Article;
