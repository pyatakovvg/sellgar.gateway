
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/attributes')
class CreateAttributeController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      method: 'post',
      url: process.env['PRODUCT_API_SRV'] + '/attributes',
      data: body,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CreateAttributeController;