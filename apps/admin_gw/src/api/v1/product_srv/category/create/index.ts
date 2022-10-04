
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import categoryBuilder from './builders/category';


@Route('post', '/api/v1/categories')
class CreateCategoryController extends Controller {
  async send() {
    const body = super.body;
    const query = super.query;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/categories',
      method: 'post',
      data: body,
    });

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

export default CreateCategoryController;
