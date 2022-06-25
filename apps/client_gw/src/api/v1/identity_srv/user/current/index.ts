
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/users/current')
class CurrentUserController extends Controller {
  async send() {
    return new Result()
      .data(null)
      .build();
  }
}

export default CurrentUserController;