import { Field } from 'db'

export const read = async (req, res) => {
  try {
    let field = await Field.findById(req.params.id)
    res.status(200).send(field)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const readAll = async (req, res) => {
  try {
    let fields = await Field.findAll({
      limit: req.params.amt,
      offset: req.params.p,
      order: ['createdAt', 'DESC']
    })
    res.status(200).send(fields)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const create = async (req, res) => {
  try {
    let field = await Field.create({
      name: req.body.name
    })
    res.status(200).send(field)
  } catch (err) {
    res.status(400).send(err)
  }
}