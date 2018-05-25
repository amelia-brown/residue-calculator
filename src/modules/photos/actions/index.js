import * as requests from 'support/request'

export const READ = 'photos/READ'
export const READ_ALL = 'photos/READ_ALL'
export const CREATE = 'photos/CREATE'
export const EDIT = 'photos/EDIT'
export const DESTROY = 'photos/DESTROY'

export const read = id => ({
  type: READ,
  payload: requests.read(`photos/${id}`)
})

export const readAll = userId => ({
  type: READ_ALL,
  payload: requests.read('photos', {userId})
})

export const create = data => ({
  type: CREATE,
  payload: requests.create('photos', {}, data)
})

export const edit = data => ({
  type: EDIT,
  payload: requests.update(
    'photos',
    {id: data.id},
    data
  )
})

export const destroy = id => ({
  type: DESTROY,
  payload: requests.destroy('photos', {id})
})
