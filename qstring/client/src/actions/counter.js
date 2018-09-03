export const increment = (counterId = 1, count = 0, isIncrementing = false) => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT_REQUESTED',
      payload: {
        isIncrementing
      }
    })

    dispatch({
      type: 'INCREMENT',
      payload: {
        counterId,
        count
      }
    })
  }
};

export const incrementAsync = (counterId = 1, count = 0, isIncrementing = false) => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT_REQUESTED',
      payload: {
        isIncrementing
      }
    })

    return setTimeout(() => {
      dispatch({
        type: 'INCREMENT',
        payload: {
          counterId,
          count
        }
      })
    }, 3000)
  }
};

export const decrement = (counterId = 1, count = 0, isDecrementing = false) => {
  return dispatch => {
    dispatch({
      type: 'DECREMENT_REQUESTED',
      payload: {
        isDecrementing
      }
    })

    dispatch({
      type: 'DECREMENT',
      payload: {
        counterId,
        count
      }
    })
  }
};

export const decrementAsync = (counterId = 1, count = 0, isDecrementing = false) => {
  return dispatch => {
    dispatch({
      type: 'DECREMENT_REQUESTED',
      payload: {
        isDecrementing
      }
    })

    return setTimeout(() => {
      dispatch({
        type: 'DECREMENT',
        payload: {
          counterId,
          count
        }
      })
    }, 3000)
  }
};