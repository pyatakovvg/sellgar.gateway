
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/payments')
class GetPaymentController extends Controller {
  async send() {
    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/payments',
      params: {
        isUse: true,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetPaymentController;