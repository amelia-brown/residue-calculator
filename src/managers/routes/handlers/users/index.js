export const read = async (req, res) => {
  try {
    let user = req.user
    res.status(200).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
}
