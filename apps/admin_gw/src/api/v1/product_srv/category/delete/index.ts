
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('delete', '/api/v1/categories')
class DeleteCategoryController extends Controller {
  async send() {
    const query = super.query;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/categories',
      method: 'delete',
      params: {
        uuid: query['uuid'],
      },
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default DeleteCategoryController;
