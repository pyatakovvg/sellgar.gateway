
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('put', '/api/v1/categories')
class UpdateCategoryController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      method: 'put',
      url: process.env['PRODUCT_API_SRV'] + '/categories',
      data: body,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UpdateCategoryController;