
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/products/template')
class GetProductsController extends Controller {
  async send() {
    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/template',
      method: 'post',
      data: {},
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetProductsController;