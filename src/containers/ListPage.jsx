import React, { useEffect } from 'react';
import ListDisplay from '../components/list/ListDisplay';
import { getChars } from '../services/apiAvatar.js';
import styles from './ListPage.css';

const ListPage = () => {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    setLoading(true);

    getChars(page)
      .then(chars => chars[0] ? setCharacters(chars) : setPage(page - 1))
      .then(() => setLoading(false))
    ;
  }, [page]);

  return <div className={styles.ListPage}>
    <div>
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
      >&lt;</button>
      <span>{page}</span>
      <button
        onClick={() => setPage(page + 1)}
      >&gt;</button>
    </div>
    {loading 
      ? <p><img src="public/loading.gif" alt="loading"/>loading...</p>
      : <ListDisplay characters={characters}/>
    }
  </div>;
};

export default ListPage;
