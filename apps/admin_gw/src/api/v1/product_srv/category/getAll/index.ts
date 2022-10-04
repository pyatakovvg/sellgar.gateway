
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import categoryBuilder from './builders/category';


@Route('get', '/api/v1/categories')
class GetCategoriesController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/categories',
      params: {
        ...query,
        include: ['group'],
      },
    });

    return new Result()
      .data(result['data'].map(categoryBuilder))
      .meta(result['meta'])
      .build();
  }
}

export default GetCategoriesController;