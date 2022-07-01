
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/brands')
class UnitController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/brands',
      params: query,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UnitController;