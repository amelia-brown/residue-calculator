export const READ = 'photos/READ'
export const READ_ALL = 'photos/READ_ALL'
export const CREATE = 'photos/CREATE'
export const EDIT = 'photos/EDIT'
export const DESTROY = 'photos/DESTROY'

export const read = id => ({
  type: READ,
  payload: id
})

export const readAll = () => ({
  type: READ_ALL
})

export const create = (data, field) => ({
  type: CREATE,
  payload: {
    data,
    field
  }
})

export const edit = data => ({
  type: EDIT,
  payload: data
})

export const destroy = id => ({
  type: DESTROY,
  payload: id
})
