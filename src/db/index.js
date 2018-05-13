import Sequelize from 'sequelize'
import * as models from './models'

const USER = process.env.DB_USER
const DB_NAME = process.env.DB_NAME
const PASSWORD = process.env.DB_PASSWORD

const HOST = process.env.DB_HOST

const db = new Sequelize(DB_NAME, USER, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  operatersAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000
  }
})

export const User = db.define('user', models.user)
export const Farm = db.define('Farm', models.farm)
export const Field = db.define('Field', models.field)
export const Photo = db.define('Photo', models.photo)

User.hasMany(Farm, {
  as: 'farms'
})

Farm.hasMany(Field, {
  as: 'fields'
})

Field.hasMany(Photo, {
  as: 'photos'
})

let force = process.env.NODE_ENV !== 'production'

db.sync({force})

export default db
