
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import catalogBuilder from './builder/catalog';


@Route('post', '/api/v1/products')
class UpdateProductController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products',
      method: 'post',
      data: {
        ...body,
      },
    });

    return new Result()
      .data(catalogBuilder(result['data']))
      .build();
  }
}

export default UpdateProductController;