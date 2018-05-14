import request from 'support/request'

export const READ = 'fields/READ'
export const READ_ALL = 'fields/READ_ALL'
export const CREATE = 'fields/CREATE'
export const EDIT = 'fields/EDIT'
export const DESTROY = 'fields/DESTROY'

export const read = id => ({
  type: READ,
  payload: request(`fields/${id}`, 'get')
})

export const readAll = userId => ({
  type: READ_ALL,
  payload: request(`fields`, 'get', {userId})
})

export const create = data => ({
  type: CREATE,
  payload: request('fields', 'post', {}, data)
})

export const edit = data => ({
  type: EDIT,
  payload: request(
    'fields',
    'put',
    {id: data.id},
    data
  )
})

export const destroy = id => ({
  type: DESTROY,
  payload: request('fields', 'delete', {id})
})
