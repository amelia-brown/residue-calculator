import { User } from 'db'

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

export const createFromFacebook = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const user = await User.findOrCreate({
    where: {
      name: profile.displayName,
      anonymous: false
    },
    defaults: {
      name: profile.displayName,
      anonymous: false
    }
  })
  return done(null, user)
}

export const createAnonymous = async (req, res) => {
  try {
    let user = await User.create({
      name: '',
      anonymous: true
    })
    res.status(200).send(user)
  } catch (err) {
    res.status(400).send(err)
  }
}
