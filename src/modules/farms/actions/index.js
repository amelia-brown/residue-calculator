import * as requests from 'support/request'

export const READ = 'farms/READ'
export const READ_ALL = 'farms/READ_ALL'
export const CREATE = 'farms/CREATE'
export const EDIT = 'farms/EDIT'
export const DESTROY = 'farms/DESTROY'

export const read = id => ({
  type: READ,
  payload: requests.read(`farms/${id}`)
})

export const readAll = () => ({
  type: READ_ALL,
  payload: requests.read(`farms`, {})
})

export const create = data => {
  return ({
    type: CREATE,
    payload: requests.create('farms', {}, data)
  })
}

export const edit = data => ({
  type: EDIT,
  payload: requests.update(
    'farms',
    'put',
    {id: data.id},
    data
  )
})

export const destroy = id => ({
  type: DESTROY,
  payload: requests.destroy('farms', {id})
})
