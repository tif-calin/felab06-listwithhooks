/* eslint-disable no-console */
const API = 'https://last-airbender-api.herokuapp.com/api/v1/characters'
  + '?perPage=69' 
  + '&page='
;

const getChars = async page => await fetch(API + page)
  .then(res => res.json())
  .catch(err => console.log(err))
;

const getCharById = async (id) => await fetch(`${API}/${id}`)
  .then(res => res.json())
  .catch(err => console.log(err))
;

export { getChars, getCharById };
