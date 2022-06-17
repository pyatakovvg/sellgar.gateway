
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/attributes')
class UnitController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/attributes',
      params: {
        ...query,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UnitController;