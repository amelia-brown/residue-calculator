import * as requests from 'support/request'

export const READ = 'fields/READ'
export const READ_ALL = 'fields/READ_ALL'
export const CREATE = 'fields/CREATE'
export const EDIT = 'fields/EDIT'
export const DESTROY = 'fields/DESTROY'

export const read = id => ({
  type: READ,
  payload: requests.get(`fields/${id}`)
})

export const readAll = userId => ({
  type: READ_ALL,
  payload: requests.get(`fields`, {userId})
})

export const create = data => ({
  type: CREATE,
  payload: requests.create('fields', {}, data)
})

export const edit = data => ({
  type: EDIT,
  payload: requests.update(
    'fields',
    {id: data.id},
    data
  )
})

export const destroy = id => ({
  type: DESTROY,
  payload: requests.destroy('fields', {id})
})
