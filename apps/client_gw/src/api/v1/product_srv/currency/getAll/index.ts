
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/currencies')
class UnitController extends Controller {
  async send() {
    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/currencies',
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UnitController;