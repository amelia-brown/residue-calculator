import Sequelize from 'sequelize'

export default {
  user: {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: Sequelize.STRING
  },
  farm: {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    location: Sequelize.STRING,
    coverage: Sequelize.INTEGER
  },
  field: {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    coverage: Sequelize.INTEGER
  },
  photo: {
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
}
