import React from 'react';
import PropTypes from 'prop-types';
import ItemDetail from './ItemDetail';

const ArticleList = props => {
  return <ul className="ArticleList">
    {props.characters.map(
      char => <ItemDetail character={char} key={char.id} />
    )}
  </ul>;
};

ArticleList.propTypes = {
  characters: PropTypes.array.isRequired
};

export default ArticleList;
