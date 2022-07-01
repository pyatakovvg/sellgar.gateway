
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/checkouts/:uuid')
class GetCheckoutController extends Controller {
  async send() {
    const params = super.params;
    const query = super.query;

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts/' + params['uuid'],
      method: 'get',
      params: {
        ...query,
      }
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetCheckoutController;