import request from 'support/request'

export const READ = 'photos/READ'
export const READ_ALL = 'photos/READ_ALL'
export const CREATE = 'photos/CREATE'
export const EDIT = 'photos/EDIT'
export const DESTROY = 'photos/DESTROY'

export const read = id => ({
  type: READ,
  payload: request(`photos/${id}`, 'get')
})

export const readAll = userId => ({
  type: READ_ALL,
  payload: request('photos', 'get', {userId})
})

export const create = data => ({
  type: CREATE,
  payload: request('photos', 'post', {}, data)
})

export const edit = data => ({
  type: EDIT,
  payload: request(
    'photos',
    'put',
    {id: data.id},
    data
  )
})

export const destroy = id => ({
  type: DESTROY,
  payload: request('photos', 'delete', {id})
})
