import { schema } from 'normalizr'

export const farms = new schema.Entity(
  'farms',
  {
    photos: photosList
  },
  {idAttribute: 'id'}
)

export const farmsList = [farms]

export const photos = new schema.Entity(
  'photos',
  {},
  {idAttribute: 'id'}
)

export const photosList = [photos]
