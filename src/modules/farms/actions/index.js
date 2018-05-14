import request from 'support/request'

export const READ = 'farms/READ'
export const READ_ALL = 'farms/READ_ALL'
export const CREATE = 'farms/CREATE'
export const EDIT = 'farms/EDIT'
export const DESTROY = 'farms/DESTROY'

export const read = id => ({
  type: READ,
  payload: request(`farms/${id}`, 'get')
})

export const readAll = userId => ({
  type: READ_ALL,
  payload: request(`farms`, 'get', {userId})
})

export const create = data => ({
  type: CREATE,
  payload: request('farms', 'post', {}, data)
})

export const edit = data => ({
  type: EDIT,
  payload: request(
    'farms',
    'put',
    {id: data.id},
    data
  )
})

export const destroy = id => ({
  type: DESTROY,
  payload: request('farms', 'delete', {id})
})
