import { CHANGE_THEME } from '../actions/themes'
import { theme } from '../config/themes'

const initialState = {
  currentTheme: theme
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.theme
      }

    default:
      return state
  }
}
