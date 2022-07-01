
import request from '@package/request';
import { NotFoundError } from '@package/errors';
import { Controller, Route, Result } from '@library/app';

import productBuilder from './builder/product';


@Route('get', '/api/v1/products/:uuid')
class GetProductsController extends Controller {
  async send() {
    const { uuid } = super.params;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products',
      params: {
        uuid,
      }
    });

    if ( ! result['data'].length) {
      throw new NotFoundError({ code: '10.7.8', message: `Товар "${uuid}" не найден` });
    }

    return new Result()
      .data(productBuilder(result['data'][0]))
      .build();
  }
}

export default GetProductsController;