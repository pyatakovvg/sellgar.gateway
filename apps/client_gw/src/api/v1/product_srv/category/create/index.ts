
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/categories')
class CreateCategoryController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      method: 'post',
      url: process.env['PRODUCT_API_SRV'] + '/categories',
      data: body,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CreateCategoryController;