import Sequelize from 'sequelize'

export const user = {
  // User model
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: Sequelize.STRING,
  email: Sequelize.STRING
}

export const farm = {
  // Farm model
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  coverage: Sequelize.INTEGER
}

export const field = {
  // Field model
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  coverage: Sequelize.INTEGER
}

export const photo = {
  // Photo model
  name: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  selection: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  coverage: Sequelize.INTEGER
}
