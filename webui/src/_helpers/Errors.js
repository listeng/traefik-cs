import { Notify } from 'quasar'

class Errors {
  // Getters
  // ------------------------------------------------------------------------

  // Public
  // ------------------------------------------------------------------------

  // Static
  // ------------------------------------------------------------------------

  static showError (body) {
    body = typeof body === 'string' ? JSON.parse(body) : body
    Notify.create({
      color: 'negative',
      position: 'top',
      message: body.message, // TODO - get correct error message
      icon: 'report_problem'
    })
  }

  static handleResponse (error) {
    console.log('handleResponse', error, error.response)
    const body = error.response.data
    if (error.response.status === 401) {
      Notify.create({
        color: 'negative',
        position: 'top',
        message: '无权访问',
        icon: 'report_problem'
      })
      return Promise.reject(body)
    }

    // Avoid to notify when reaching end of an infinite scroll
    if (!error.response.data.message.includes('invalid request: page:')) {
      Errors.showError(body)
    }
    return Promise.reject(body)
  }

  // Static Private
  // ------------------------------------------------------------------------
}

export default Errors
