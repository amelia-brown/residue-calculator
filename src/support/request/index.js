import Uri from 'urijs'

const BASE_URL = '/api/'

const configurePath = (path, params) => {
  let q = new Uri.search(params)
  return `${BASE_URL}/${path}${q}`
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
  } catch(err) {
    console.log(err)
  }
