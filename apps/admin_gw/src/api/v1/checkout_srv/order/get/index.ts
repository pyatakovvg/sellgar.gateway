
import { NotFoundError } from '@package/errors';
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import checkout from './builders/checkout';


@Route('get', '/api/v1/checkouts/:uuid')
class GetCheckoutController extends Controller {
  async send() {
    const query = super.query;
    const params = super.params;

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts',
      method: 'get',
      params: {
        uuid: params['uuid'],
        ...query,
      },
    });

    if ( ! result['data'][0]) {
      throw new NotFoundError({ code: '22.0.0', message: 'Счет не найден' });
    }

    return new Result()
      .data(checkout(result['data'][0]))
      .build();
  }
}

export default GetCheckoutController;