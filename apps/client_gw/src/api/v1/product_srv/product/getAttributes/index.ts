
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/products/attributes')
class GetAttributesController extends Controller {
  async send() {
    const params = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/attributes',
      params,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetAttributesController;