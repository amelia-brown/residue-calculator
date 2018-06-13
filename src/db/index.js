import Sequelize from 'sequelize'
import * as models from './models'

const CONNECTION_STRING = process.env.DATABASE_URL

const db = new Sequelize(CONNECTION_STRING, {
  pool: {
    max: 5,
    min: 0,
    acquire: 10000,
    idle: 1000
  }
})

export const User = db.define('user', models.user)
export const Farm = db.define('farm', models.farm)
export const Field = db.define('field', models.field)
export const Photo = db.define('photo', models.photo)

User.hasMany(Farm, {
  as: 'farms'
})

Farm.belongsTo(User)

Farm.hasMany(Field, {
  as: 'fields'
})

Field.belongsTo(Farm)

Field.hasMany(Photo, {
  as: 'photos'
})

Photo.belongsTo(Field)

let force = process.env.NODE_ENV !== 'production'

db.sync({force})

export default db
