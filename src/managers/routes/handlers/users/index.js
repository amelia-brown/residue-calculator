import User from 'db'

export const read = (req, res) => {
  let id = req.params.id
  return User.findById(id)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(400).send(err))
}

export const create = (req, res) =>
  User.create({
    name: req.body.name
  })
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).send(err))
