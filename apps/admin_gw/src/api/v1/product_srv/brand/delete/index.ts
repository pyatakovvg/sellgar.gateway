
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('delete', '/api/v1/brands')
class DeleteBrandController extends Controller {
  async send() {
    const query = super.query;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/brands',
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

export default DeleteBrandController;
