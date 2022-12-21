
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/users/current/logout')
class CurrentUserController extends Controller {
  async send() {
    super.cookie.set(process.env['COOKIE_NAME'], null);

    return new Result()
      .data(null)
      .build();
  }
}

export default CurrentUserController;