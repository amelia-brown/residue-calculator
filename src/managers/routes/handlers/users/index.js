export const read = async (req, res) => {
  try {
    let user = req.user
    if (user) {
      res.status(200).send({
        user,
        loggedIn: true
      })
    } else {
      res.status(200).send({
        loggedIn: false
      })
    }
  } catch (err) {
    res.status(400).send(err)
  }
}
