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
  location: Sequelize.STRING,
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
    type: Sequelize.STRING,
    allowNull: false
  },
  photo: {
    type: Sequelize.BLOB,
    allowNull: false
  },
  coveragePhoto: Sequelize.BLOB,
  coverage: Sequelize.INTEGER
}
