const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (currentState = initialState, counterAction) => {
  let nextState
  console.log('currentState: ', currentState, ' counterAction: ', counterAction)

  switch (counterAction.type) {
    case 'INCREMENT_REQUESTED':
      nextState = {
        ...currentState,
        isIncrementing: counterAction.payload.isIncrementing
      }
      return nextState

    case 'INCREMENT':
      nextState = {
        ...currentState,
        count: currentState.count + counterAction.payload.count,
        isIncrementing: counterAction.payload.isIncrementing
      }
      return nextState

    case 'DECREMENT_REQUESTED':
      nextState = {
        ...currentState,
        isDecrementing: true
      }
      return nextState

    case 'DECREMENT':
      nextState = {
        ...currentState,
        count: currentState.count - counterAction.payload.amount,
        isDecrementing: counterAction.payload.isDecrementing
      }
      return nextState

    default:
      return currentState
  }
}
