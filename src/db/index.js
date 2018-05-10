import Sequelize from 'sequelize'

import * as models from './models'

const USER = process.env.DB_USER
const DB_NAME = process.env.DB_NAME
const PASSWORD = process.env.DB_PASSWORD

const HOST = process.env.DB_HOST

const db = new Sequelize(USER, DB_NAME, PASSWORD, {
  host: HOST,
  dialect: 'postgres',
  operatersAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  }
})

db
  .authenticate()
  .then(() => {
    console.log(`Connection to ${DB_NAME} has been established successfully.`)
  })
  .catch(err => {
    console.error(`Unable to connect to ${DB_NAME}:`, err)
  })

models.User.sync()
models.Farm.sync()
models.Field.sync()
models.Photo.sync()

export default db
