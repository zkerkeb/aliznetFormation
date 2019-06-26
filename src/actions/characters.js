import axios from 'axios'

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS'

export const CHARACTERS_PENDING = 'CHARACTERS_PENDING'

export const charactersPending = payload => ({
  type: CHARACTERS_PENDING,
  payload
})

export const displayCharacters = payload => ({
  type: DISPLAY_CHARACTERS,
  payload
})

export const getCharacters = (school = 'gryffindor') => dispatch => {
  dispatch(charactersPending(true))

  axios({
    method: 'GET',
    url: `http://hp-api.herokuapp.com/api/characters/house/${school}`
  })
    .then(res => {
      console.log(res)
      dispatch(displayCharacters(res.data))
      dispatch(charactersPending(false))
    })
    .catch(err => {
      console.log(err)
      dispatch(charactersPending(false))
    })
}
