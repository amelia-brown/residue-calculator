import Sequelize from 'sequelize'

export default (db) => {
  const User = db.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
  })

  const Farm = db.define('farm', {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    coverage: Sequelize.INTEGER
  })

  const Field = db.define('field', {
    name: Sequelize.STRING,
    coverage: Sequelize.INTEGER
  })

  const Photo = db.define('photo', {
    name: Sequelize.STRING,
    photo: Sequelize.BLOB,
    coverage_photo: Sequelize.BLOB,
    coverage: Sequelize.INTEGER
  })

  User.hasMany(Farm)
  Farm.hasMany(Field)
  Field.hasMany(Photo)

  User.sync()
  Farm.sync()
  Field.sync()
  Photo.sync()
}
