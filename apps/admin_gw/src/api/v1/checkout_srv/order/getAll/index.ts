
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/checkouts')
class GetOrdersController extends Controller {
  async send() {
    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts',
    });

    return new Result()
      .data(result['data'])
      .meta(result['meta'])
      .build();
  }
}

export default GetOrdersController;