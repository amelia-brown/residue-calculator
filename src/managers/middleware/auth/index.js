export default (req, res, next) => {
  let isLoggedIn = !!req.user

  res.append('X-Auth-Status', isLoggedIn)

  next()
}
