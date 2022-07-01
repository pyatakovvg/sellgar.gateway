
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('put', '/api/v1/attributes')
class UpdateAttributeController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      method: 'put',
      url: process.env['PRODUCT_API_SRV'] + '/attributes',
      data: body,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UpdateAttributeController;