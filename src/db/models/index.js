import Sequelize from 'sequelize'

export default {
  user: {
    name: Sequelize.STRING,
    email: Sequelize.STRING
  },
  farm: {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    coverage: Sequelize.INTEGER
  },
  field: {
    name: Sequelize.STRING,
    coverage: Sequelize.INTEGER
  },
  photo: {
    name: Sequelize.STRING,
    photo: Sequelize.BLOB,
    coverage_photo: Sequelize.BLOB,
    coverage: Sequelize.INTEGER
  }
}
