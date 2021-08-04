import React, { useEffect } from 'react';
import ListDisplay from '../components/list/ListDisplay';
import { getChars } from '../services/apiAvatar.js';

const ListPage = () => {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    getChars().then(setCharacters).then(setLoading(false));

    return () => setCharacters([]);
  }, []);

  return <div className="ListPage">
    {loading 
      ? <span>loading</span> 
      : <ListDisplay characters={characters}/>
    }
  </div>;
};

export default ListPage;
