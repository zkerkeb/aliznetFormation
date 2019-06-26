import { DISPLAY_CHARACTERS, CHARACTERS_PENDING } from '../actions/characters'

const initialState = {
  currentCharacters: [],
  isPending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CHARACTERS:
      return {
        ...state,
        currentCharacters: action.payload
      }
    case CHARACTERS_PENDING:
      return {
        ...state,
        isPending: action.payload
      }
    default:
      return state
  }
}
