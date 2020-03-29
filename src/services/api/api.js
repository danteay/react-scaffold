import config from './../../config';

class Api {
  login(email, pass) {
    const { user } = config;

    if (email != user.email || pass != user.pass) {
      return {
        user: null,
        error: 'Invalid email or password',
      };
    }

    return {
      user: user,
      error: null,
    };
  }
}

const api = new Api();

export default api;
