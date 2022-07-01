
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import categoryBuilder from './builders/category';


@Route('get', '/api/v1/categories/:uuid')
class GetCategoriesController extends Controller {
  async send() {
    const params = super.params;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/categories',
      params: {
        uuid: params['uuid'],
      },
    });

    return new Result()
      .data(categoryBuilder(result['data']?.[0] ?? {}))
      .build();
  }
}

export default GetCategoriesController;