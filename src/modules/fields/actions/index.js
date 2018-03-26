export const READ = 'fields/READ'
export const READ_ALL = 'fields/READ_ALL'
export const CREATE = 'fields/CREATE'
export const EDIT = 'fields/EDIT'
export const DESTROY = 'fields/DESTROY'

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

export const edit = data => ({
  type: EDIT,
  payload: data
})

export const destroy = id => ({
  type: DESTROY,
  payload: id
})
