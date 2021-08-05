import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailDisplay.css';
import { Link } from 'react-router-dom';

const DetailDisplay = props => {
  return <div className={styles.DetailDisplay}>
    <span>name: <span className="info">{props.character.name}</span></span>
    <img src={props.character.photoUrl}/>
    <p>allies: 
      <span className="info">{props.character.allies.join(', ')}</span>
    </p>
    <p>enemies: 
      <span className="info">{props.character.enemies.join(', ')}</span>
    </p>
    {Object.keys(props.character)
      .filter(k => !'_id name photoUrl allies enemies'.split(' ').includes(k))
      .map(key => <>
        <span>{key}: <span className="info">{props.character[key]}</span></span>
      </>)
    }
    <Link to="/"><button>Back</button></Link>
  </div>;
};

DetailDisplay.propTypes = {
  character: PropTypes.object.isRequired
};

export default DetailDisplay;
