
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/products/create')
class GetProductsController extends Controller {
  async send() {
    const body = super.body;
    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/create',
      method: 'post',
      data: {
        ...body,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetProductsController;