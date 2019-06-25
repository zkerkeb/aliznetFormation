import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../actions/counter'

const initialState = {
  counter: 0,
  serpentard: 0,
  gryffondor: 0,
  pouffsoufle: 0,
  serdaigle: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        [action.payload]: state[action.payload] + 1
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        [action.payload]: state[action.payload] - 1
      }
    default:
      return state
  }
}
