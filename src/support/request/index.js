import URI from 'urijs'

const BASE_URL = '/api/'

const configurePath = (path, params) => {
  let url = new URI(`${BASE_URL}${path}`).search(params)
  return url
}

export default (path, type, params = {}, body = {}) => {
  try {
    let resp = fetch(configurePath(path, params),
      {
        type,
        body
      }
    )
    return resp
  } catch (err) {
    console.log(err)
  }
}
