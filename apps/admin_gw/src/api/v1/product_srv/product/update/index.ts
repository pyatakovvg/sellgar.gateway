
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import productBuilder from './builder/product';


@Route('put', '/api/v1/products/:uuid')
class UpdateProductController extends Controller {
  async send() {
    const { uuid } = super.params;
    const data = super.body;
    const query = super.query;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/' + uuid,
      method: 'put',
      data,
    });

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products',
      method: 'get',
      params: {
        uuid,
        ...query,
      }
    })

    return new Result()
      .data(productBuilder(result['data'][0]))
      .build();
  }
}

export default UpdateProductController;