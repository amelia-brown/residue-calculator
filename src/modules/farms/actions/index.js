export const READ = 'farms/READ'
export const READ_ALL = 'farms/READ_ALL'
export const CREATE = 'farms/CREATE'
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
