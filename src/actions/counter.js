export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'

export const counterIncrement = payload => ({
  type: COUNTER_INCREMENT,
  payload
})

export const counterDecrement = payload => ({
  type: COUNTER_DECREMENT,
  payload
})
