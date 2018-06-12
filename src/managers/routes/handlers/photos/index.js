import { Photo } from 'db'

export const read = async (req, res) => {
  try {
    let photo = await Photo.findById(req.params.id)
    res.status(200).send(photo)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const readAll = async (req, res) => {
  try {
    let photos = await Photo.findAll({
      where: {
        fieldId: req.params.fieldId
      },
      limit: req.params.amt,
      offset: req.params.p,
      order: [
        ['createdAt', 'DESC']
      ]
    })
    res.status(200).send(photos)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const create = async (req, res) => {
  try {
    let photo = await Photo.create({
      name: req.body.name,
      photo: req.body.photo,
      fieldId: req.body.fieldId
    })
    res.status(200).send(photo)
  } catch (err) {
    res.status(400).send(err)
  }
}
