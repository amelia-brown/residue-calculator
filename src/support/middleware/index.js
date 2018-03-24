const defaultState = {
  farms: {},
  photos: {}
}

export const loadState = () => {
  try {
    if (typeof localStorage !== 'undefined') {
      let result = localStorage.getItem('data')
      return result
        ? JSON.parse(result)
        : defaultState
    }
    return defaultState
  } catch (err) {
    return defaultState
  }
}

export const saveState = (state) => {
  try {
    if (typeof localStorage !== 'undefined') {
      let result = JSON.stringify(state)
      localStorage.setItem('data', result)
    }
  } catch (err) {
    console.error('Error saving to storage')
  }
}

export const storage = store => next => action => {
  next(action)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('data', JSON.stringify(store.getState()))
  }
}
