
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import productBuilder from './builder/product';


@Route('put', '/api/v1/products/:uuid')
class UpdateProductController extends Controller {
  async send() {
    const { uuid } = super.params;
    const data = super.body;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/' + uuid,
      method: 'put',
      data,
    });

    return new Result()
      .data(productBuilder(result['data']))
      .build();
  }
}

export default UpdateProductController;