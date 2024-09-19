import { APP } from '../_helpers/APP'
import errors from '../_helpers/Errors'
import resize from '../_directives/resize'

export default async ({ app, router }) => {
  // Directives
  app.directive('resize', resize)

  // Router
  // ----------------------------------------------
  router.beforeEach(async (to, from, next) => {
    // Set APP
    APP.routeTo = to
    APP.routeFrom = from
    next()
  })

  // Api (axios)
  // ----------------------------------------------
  APP.api.interceptors.request.use((config) => {
    console.log('interceptors -> config', config)
    // config.headers['Accept'] = '*/*'

    const authAdmin = localStorage.getItem('pb_admin_auth');

    if (authAdmin) {
      try {
        const authData = JSON.parse(authAdmin);
        if (authData.token) {
          config.headers['Authorization'] = authData.token;
        }
      } catch {
      }
    } else {
      const authUser = localStorage.getItem('pocketbase_auth');

      if (authUser) {
        try {
          const authData = JSON.parse(authUser);
          if (authData.token) {
            config.headers['Authorization'] = authData.token;
          }
        } catch {
        }
      }
    }
      
    return config
  })

  APP.api.interceptors.response.use((response) => {
    console.log('interceptors -> response', response)
    return response
  }, errors.handleResponse)
}
