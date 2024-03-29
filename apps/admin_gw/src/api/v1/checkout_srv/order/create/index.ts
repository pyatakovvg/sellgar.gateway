
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/checkouts')
class CreateCheckoutController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      method: 'post',
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts',
      data: {
        ...body,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CreateCheckoutController;