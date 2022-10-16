
import request from '@package/request';
import { NotFoundError } from '@package/errors';
import { Controller, Route, Result } from '@library/app';

import checkoutBuilder from './builders/bucket';


@Route('get', '/api/v1/checkouts/:uuid')
class GetCheckoutController extends Controller {
  async send() {
    const params = super.params;

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts',
      method: 'get',
      params: {
        uuid: params['uuid'],
      }
    });

    if ( ! result['data']?.[0]) {
      throw new NotFoundError({ code: '10.0.0', message: 'Заказ не найден' });
    }

    return new Result()
      .data(checkoutBuilder(result['data'][0]))
      .build();
  }
}

export default GetCheckoutController;