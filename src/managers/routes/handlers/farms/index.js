import { Farm } from 'db'

export const read = async (req, res) => {
  try {
    let farm = await Farm.findById(req.params.id)
    res.status(200).send(farm)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const readAll = async (req, res) => {
  try {
    let farms = await Farm.findAll({
      where: {
        userId: req.user.id
      },
      limit: req.params.amt || 10,
      offset: req.params.p || 0,
      order: [
        ['createdAt', 'DESC']
      ]
    })
    res.status(200).send(farms)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const create = async (req, res) => {
  try {
    let farm = await Farm.create({
      name: req.body.name,
      location: req.body.location,
      coverage: req.params.coverage,
      userId: req.user.id
    })
    res.status(200).send(farm)
  } catch (err) {
    res.status(400).send(err)
  }
}
