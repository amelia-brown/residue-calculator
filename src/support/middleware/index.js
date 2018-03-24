export const getStateFromStorage = () => {
  if (typeof localStorage !== 'undefined') {
    let result = localStorage.getItem('data')
    return result
      ? JSON.parse(result)
      : {}
  }
  return false
}

export const storage = store => next => action => {
  next(action)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('data', JSON.stringify(store.getState()))
  }
}
