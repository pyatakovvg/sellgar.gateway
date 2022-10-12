
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import checkoutBuilder from './builders/checkout';


@Route('get', '/api/v1/checkouts')
class GetOrdersController extends Controller {
  async send() {
    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts',
    });

    return new Result()
      .data(result['data'].map(checkoutBuilder))
      .meta(result['meta'])
      .build();
  }
}

export default GetOrdersController;