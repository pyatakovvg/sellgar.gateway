
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/statuses')
class GetStatusController extends Controller {
  async send() {
    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/statuses',
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetStatusController;