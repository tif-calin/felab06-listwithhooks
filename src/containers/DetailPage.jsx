import React, { useEffect } from 'react';
import ItemDetail from '../components/list/ItemDetail';
import { getCharById } from '../services/apiAvatar.js';

const DetailPage = props => {
  const [character, setCharacter] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    getCharById(props.match.params.id)
      .then(setCharacter)
      .then(setLoading(false))
    ;

    return () => setCharacter([]);
  }, []);

  return <div className="DetailPage">
    {loading 
      ? <span>loading</span> 
      : <ItemDetail character={character}/>
    }
  </div>;
};

export default DetailPage;
