
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('delete', '/api/v1/attributes')
class UpdateAttributeController extends Controller {
  async send() {
    const query = super.query;

    await request({
      method: 'delete',
      url: process.env['PRODUCT_API_SRV'] + '/attributes',
      params: {
        uuid: query['uuid'],
      },
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default UpdateAttributeController;