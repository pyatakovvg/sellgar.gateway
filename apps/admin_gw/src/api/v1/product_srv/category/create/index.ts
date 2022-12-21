
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/categories')
class CreateCategoryController extends Controller {
  async send() {
    const body = super.body;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/categories',
      method: 'post',
      data: body,
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default CreateCategoryController;
