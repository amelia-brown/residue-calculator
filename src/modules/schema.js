import { schema } from 'normalizr'

export const farms = new schema.Entity(
  'farms',
  {
    fields: fieldsList
  },
  {idAttribute: 'id'}
)

export const farmsList = [farms]

export const fields = new schema.Entity(
  'fields',
  {
    photos: photosList
  },
  {idAttribute: 'id'}
)

export const fieldsList = [fields]

export const photos = new schema.Entity(
  'photos',
  {},
  {idAttribute: 'id'}
)

export const photosList = [photos]
