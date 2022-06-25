
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/checkout')
class CurrentUserController extends Controller {
  async send() {
    // const result = await request({
    //   url: process.env['IDENTITY_API_SRV'] + '/users',
    // });

    return new Result()
      .data({})
      .build();
  }
}

export default CurrentUserController;