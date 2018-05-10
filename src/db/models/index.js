import Sequelize from 'sequelize'

import db from 'db'

export const User = db.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
})

export const Farm = db.define('farm', {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  coverage: Sequelize.INTEGER,
})

export const Field = db.define('field', {
  name: Sequelize.STRING,
  coverage: Sequelize.INTEGER,
})

export const Photo = db.define('photo', {
  name: Sequelize.STRING,
  photo: Sequelize.BLOB,
  coverage_photo: Sequelize.BLOB,
  coverage: Sequelize.INTEGER,
})

User.hasMany(Farm)
Farm.hasMany(Field)
Field.hasMany(Photo)
