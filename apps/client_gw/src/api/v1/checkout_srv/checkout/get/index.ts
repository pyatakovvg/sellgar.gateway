
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/checkouts')
class CurrentUserController extends Controller {
  async send() {
    // const result = await request({
    //   url: process.env['IDENTITY_API_SRV'] + '/users',
    // });

    return new Result()
      .data({
        products: [],
        price: 0,
        currency: {
          code: 'RUB',
          displayName: 'руб.'
        }
      })
      .build();
  }
}

export default CurrentUserController;