import Immutable from 'immutable'

/*
 * @param {Map} state
 * @param {object} action
 * @param {string} resource - what resource does the action affect
 *
  * */
// if rejected, merge the error and status into the resource state
export const rejectedHandler = (state, action, resource) => {
  return state
    .merge({
      error: action.payload,
      status: action.type
    })
}

/*
 * @param {Map} state
 * @param {object} action
 * @param {string} resource - what resource does the action affect
 *
  * */
// if fulfilled, merge the result, data, status and pagination
// details into the resource state
export const fulfilledHandler = (state, action) => {
  const data = action.payload || new Immutable.List()
  return state
    .mergeDeep(
      data
    )
    .merge({
      next: action.payload.next,
      previous: action.payload.previous,
      status: action.type
    })
}

/*
 * @param {Map} state
 * @param {object} action
 * @param {string} resource - what resource does the action affect
 *
 * if pending, merge the status into the resource state
  * */

export const pendingHandler = (state, action, resource) => {
  return state
    .merge({
      status: action.type
    })
}

const createHandlers = (handlers, action) => Object.assign(
  {},
  handlers,
  {
    [`${action}_PENDING`]: pendingHandler,
    [`${action}_FULFILLED`]: fulfilledHandler,
    [`${action}_REJECTED`]: rejectedHandler
  }
)

/*
 * @param {string} resource - what resource does the action affect
 * @param {object} initialState
 * @param {array} resourceActions - array of action types it will respond to
 * @param {array} externalCases - special cases we can define how the state will change
 *
 * */
export default (
  resource,
  initialState,
  resourceActions = [],
  externalCases = {}
) => {
  // just handle the resource cases as any api result based
  // on success/pending/rejected cases

  const resourceCases = resourceActions
    .reduce(createHandlers, {})

  // join resource cases with special cases we've defined
  // they all follow the pattern (state, action) => nextState
  const cases = Object.assign(
    {},
    resourceCases,
    externalCases
  )

  // map through our cases, return the new state

  return (state = initialState, action = {}) => {
    switch (cases.hasOwnProperty(action.type)) {
      case true:
        return cases[action.type](state, action, resource)
      case false:
      default:
        return state
    }
  }
}
