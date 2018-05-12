import Sequelize from 'sequelize'
import models from './models'

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

Farm.belongsTo(User, {
  foreignKey: {
    field: 'userId',
    allowNull: false
  }
})

Field.belongsTo(Farm, {
  foreignKey: {
    field: 'farmId',
    allowNull: false
  }
})

Photo.belongsTo(Field, {
  foreignKey: {
    field: 'farmId',
    allowNull: false
  }
})

db.sync({force: true})

export default db
