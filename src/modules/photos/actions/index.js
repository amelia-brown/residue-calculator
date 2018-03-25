export const READ = 'photos/READ'
export const READ_ALL = 'photos/READ_ALL'
export const CREATE = 'photos/CREATE'
export const EDIT = 'farms/EDIT'
export const DESTROY = 'farms/DESTROY'

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
