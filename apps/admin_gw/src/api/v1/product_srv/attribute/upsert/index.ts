
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/attributes')
class CreateAttributeController extends Controller {
  async send() {
    const body = super.body;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/attributes',
      method: 'post',
      data: body,
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default CreateAttributeController;