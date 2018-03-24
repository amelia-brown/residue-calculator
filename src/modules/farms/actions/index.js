export const READ = 'farms/READ'
export const READ_ALL = 'farms/READ_ALL'
export const CREATE = 'farms/CREATE'

export const read = id => ({
  type: READ,
  payload: id
})

export const readAll = () => ({
  type: READ_ALL
})

export const create = data => ({
  type: CREATE,
  payload: data
})
