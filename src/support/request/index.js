import URI from 'urijs'
import Immutable from 'immutable'

const BASE_URL = '/api/'

const configurePath = (path, params) => {
  let url = new URI(`${BASE_URL}${path}`).search(params)
  return url
}

const request = method =>
  async (path, params = {}, body) => {
    try {
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')

      let options = {
        method,
        headers,
        credentials: 'include'
      }

      if (body) {
        options = {
          ...options,
          body: JSON.stringify(body)
        }
      }

      let resp = await fetch(
        configurePath(path, params),
        options
      )
      let json = await resp.json()
      return Immutable.fromJS(json)
    } catch (err) {
      console.log(err)
    }
  }

export const read = request('GET')
export const create = request('POST')
export const update = request('PUT')
export const destroy = request('DELETE')
