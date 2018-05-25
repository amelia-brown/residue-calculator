import { createSelector } from 'reselect'

export const getFarms = state => state.get('farms')

export const getData = createSelector(
  getFarms,
  farms => farms.get('data')
)
