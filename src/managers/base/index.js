export default {

  /**
   * function that calls each of the configuration handlers with app
   */

  handle (app) {
    switch (process.env.NODE_ENV) {
      case 'production':
        this.configureProduction(app)
        break

      case 'development':
      default:
        this.configureDevelopment(app)
        break
    }

    return this.configureCommon(app)
  },

  /**
   * configuration that is run on the app object in both envs
   */

  configureCommon () {},

  /**
   * configuration that is run on the app object in production
   */

  configureProduction () {},

  /**
   * configuration that is run on the app object in development
   */

  configureDevelopment () {}
}
