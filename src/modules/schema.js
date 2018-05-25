import { schema } from 'normalizr'

export const photo = new schema.Entity(
  'photos',
  {},
  {idAttribute: 'id'}
)
export const photoList = [photo]

export const field = new schema.Entity(
  'fields',
  {
    photos: photoList
  },
  {idAttribute: 'id'}
)
export const fieldList = [field]

export const farm = new schema.Entity(
  'farms',
  {
    fields: fieldList
  },
  {idAttribute: 'id'}
)
export const farmList = [farm]
