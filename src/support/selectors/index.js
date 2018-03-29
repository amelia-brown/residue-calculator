import { List } from 'immutable'

export const getFarmFields = (id, farms, fields) => {
  let farm = farms.get(`${id}`) || new Map()
  let fieldList = farm.get('fields') || new List()
  let denormalizedFields = fieldList
    .map(field => fields.get(`${field}`))
  return farm.set(
    'fields',
    denormalizedFields
  )
}

export const getFieldPhotos = (id, fields, photos) => {
  let field = fields.get(`${id}`) || new Map()
  let photoList = field.get('photos') || new List()
  let denormalizedPhotos = photoList
    .map(photo => photos.get(`${photo}`))
  return field.set(
    'photos',
    denormalizedPhotos
  )
}
