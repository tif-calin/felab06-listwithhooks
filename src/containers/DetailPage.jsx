import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import DetailDisplay from '../components/detail/DetailDisplay';
import { getCharById } from '../services/apiAvatar.js';

const DetailPage = props => {
  const [character, setCharacter] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);

    getCharById(props.match.params.id)
      .then(setCharacter)
      .finally(() => setLoading(false))
    ;
  }, []);

  return <div className="DetailPage">
    {loading 
      ? <span>loading</span> 
      : <DetailDisplay character={character}/>
    }
  </div>;
};

DetailPage.propTypes = {
  match: propTypes.object.isRequired
};

export default DetailPage;
