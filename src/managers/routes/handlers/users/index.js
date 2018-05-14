import { User } from 'db'

export const read = async (req, res) => {
  try {
    let user = await User.findById(req.params.id)
    res.status(200).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
}

export const findOrCreate = async (profile, done) => {
  try {
    // const email = profile.emails[0].value
    // const photo = profile.photos[0].value

    let user = await User.findOrCreate({
      where: {
        name: profile.displayName
      },
      defaults: {
        name: profile.displayName
      }
    })
    return done(null, user)
  } catch (err) {
    return done(err)
  }
}
