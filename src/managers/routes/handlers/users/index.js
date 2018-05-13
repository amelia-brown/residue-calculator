import { User } from 'db'

export const read = async (req, res) => {
  try {
    let user = await User.findById(req.params.id)
    res.status(200).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const create = async (req, res) => {
  try {
    let user = await User.create({
      name: req.body.name,
      email: req.body.email
    })
    res.status(201).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
}
